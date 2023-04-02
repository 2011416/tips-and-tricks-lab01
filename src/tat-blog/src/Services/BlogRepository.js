import axios from "axios";

export async function getPosts (keyword ='',pageSize = 5, pageNumber = 1, sortColumm ='', sortOrder = '') {
    try {
    const response =await
    axios.get (`https://localhost:7245/api/posts?Keyword=${keyword}&PageSize=${pageSize}&PageNumber=${pageNumber}&SortColumn=${sortColumm}&SortOrder=${sortOrder}`);
        const data = response.data;
        if (data.isSuccess) 
          return data.result;
        else 
            return null;
    } catch (error) {
        console.log('Error', error.mesage);
        return null;
    }
}
