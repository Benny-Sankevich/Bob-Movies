namespace Movies.DTO
{
    #region BaseDTO
    public class BaseDTO
    {
        public string Id { get; set; }
    }
    #endregion

    #region MovieListResponseDTO
    public class MovieListResponseDTO
    {
        public MovieListResponseDTO()
        {
            this.Search = new List<MovieDTO>();
        }
        public List<MovieDTO> Search { get; set; }
        public string totalResults { get; set; }
    }
    #endregion
}
