using Movies.DTO;
using Movies.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Movies.Models.BaseModels;

namespace Movies.Services.Contracts
{
    public interface IMovieService
    {
        #region GetMovies
        Task<MovieListResponseDTO> GetMovies(RequestListParameters request);
        #endregion

        #region GetMovieDetails
        Task<MovieDetailsDTO> GetMovieDetails(RequestDetailsParameters request);
        #endregion
    }
}
