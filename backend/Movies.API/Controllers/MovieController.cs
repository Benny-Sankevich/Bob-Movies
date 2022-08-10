using Microsoft.AspNetCore.Mvc;
using Movies.DTO;
using Movies.Models;
using Movies.Services.Contracts;
using static Movies.Models.BaseModels;

namespace Movies.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private IMovieService _service;

        public MovieController(IMovieService service)
        {
            _service = service;
        }

        [HttpPost]
        [Route("GetMoviesList")]
        public Task<MovieListResponseDTO> GetAll(RequestListParameters data)
        {
            var list = _service.GetMovies(data);

            return list;
        }

        [HttpPost]
        [Route("GetMovieDetails")]
        public Task<MovieDetailsDTO> GetMovieDetails(RequestDetailsParameters data)
        {
            var movie = _service.GetMovieDetails(data);

            return movie;
        }
    }
}
