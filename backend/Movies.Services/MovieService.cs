using AutoMapper;
using Movies.DTO;
using Movies.Models;
using Movies.Services.Contracts;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using static Movies.Models.BaseModels;

namespace Movies.Services
{
    public class MovieService : IMovieService
    {
        #region Private members
        private readonly IMapper _mapper;
        private const string _BaseUrl = "http://www.omdbapi.com/";
        private readonly string _apikey = "b76b385c";
        #endregion

        public MovieService(IMapper mapper)
        {
            _mapper = mapper;
        }

        #region GetMovies
        public async Task<MovieListResponseDTO> GetMovies(RequestListParameters request)
        {
            var query = string.IsNullOrEmpty(request.searchText) ? "indiana" : request.searchText;
            using (var client = new HttpClient { BaseAddress = new Uri(_BaseUrl) })
            {
                client.DefaultRequestHeaders.Accept.Clear();
                var response = await client
                                    .GetAsync($"{_BaseUrl}?apikey={_apikey}&page={request.pageNo}&type=movie&Content-Type=application/json/&s={query}")
                                    .ConfigureAwait(false);

                if (response.IsSuccessStatusCode)
                {
                    var movieListResponseJson = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
                    var movieListResponse = JsonConvert.DeserializeObject<MovieListResponse>(movieListResponseJson, new JsonSerializerSettings
                    {
                        MetadataPropertyHandling = MetadataPropertyHandling.Ignore,
                        DateParseHandling = DateParseHandling.None,
                    });
                    var movieListResponseDto = new MovieListResponseDTO();
                    movieListResponseDto.totalResults = movieListResponse.totalResults;
                    foreach (var movie in movieListResponse.Search)
                    {
                        var movieDto = _mapper.Map<MovieDTO>(movie);
                        movieListResponseDto.Search.Add(movieDto);
                    }
                    return movieListResponseDto;
                }
            }
            return null;
        }
        #endregion

        #region GetMovieDetails
        public async Task<MovieDetailsDTO> GetMovieDetails(RequestDetailsParameters request)
        {
            using (var client = new HttpClient { BaseAddress = new Uri(_BaseUrl) })
            {
                client.DefaultRequestHeaders.Accept.Clear();
                var response = await client
                                    .GetAsync($"{_BaseUrl}?apikey={_apikey}&type=movie&Content-Type=application/json/&i={request.movieId}")
                                    .ConfigureAwait(false);

                if (response.IsSuccessStatusCode)
                {
                    var movieResponseJson = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
                    var movieResponse = JsonConvert.DeserializeObject<MovieDetails>(movieResponseJson, new JsonSerializerSettings
                    {
                        MetadataPropertyHandling = MetadataPropertyHandling.Ignore,
                        DateParseHandling = DateParseHandling.None,
                    });
                    var movieResponseDto = _mapper.Map<MovieDetailsDTO>(movieResponse);         
                    return movieResponseDto;
                }
            }
            return null;
        }
        #endregion
    }
}
