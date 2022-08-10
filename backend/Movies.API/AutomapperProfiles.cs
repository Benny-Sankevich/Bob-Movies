using AutoMapper;
using Movies.DTO;
using Movies.Models;
using static Movies.Models.BaseModels;

namespace Movies.API
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<MovieDetails, MovieDetailsDTO>()
                .ForMember(dest => dest.Id, opts => opts.MapFrom("imdbID"))
                .ForMember(dest => dest.Rating, opts => opts.MapFrom("imdbRating"))
                .ForMember(dest => dest.Votes, opts => opts.MapFrom("imdbVotes"))
                .ReverseMap();

            CreateMap<Movie, MovieDTO>().ForMember(dest => dest.Id, opts => opts.MapFrom("imdbID")).ReverseMap();
        }
    }
}