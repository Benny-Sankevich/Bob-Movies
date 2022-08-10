using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movies.Models
{
    public class BaseModels
    {
        #region RequestListParameters
        public class RequestListParameters
        {
            public int pageNo { get; set; }
            public string? searchText { get; set; }
        }
        #endregion

        #region RequestDetailsParameters
        public class RequestDetailsParameters
        {
            public string movieId { get; set; }
        }
        #endregion

        #region MovieListResponse
        public class MovieListResponse
        {
            public List<Movie> Search { get; set; }
            public string totalResults { get; set; }
            public string Response { get; set; }
        }
        #endregion

    }
}
