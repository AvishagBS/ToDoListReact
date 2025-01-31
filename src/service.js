import axios from 'axios';

//גורם שהניתוב יעבוד תמיד דרך הניתוב כאן
axios.defaults.baseURL = "https://localhost:7126"

axios.interceptors.response.use(response=>{
  return response;
},error=>{
  console.log(Promise.reject(error));
})

export default {
  getTasks: async () => {
    const result = await axios.get('/items')    
    return result.data;
  },

  addTask: async(name)=>{
    
    const result  = await axios.post('/items',{
      "id": 0,
      "name": name,
      "isComplete": false
    },{
      headers: {
        'Content-Type': 'application/json'
      }})
     return result.data;
     
  },

  setCompleted: async(id, isComplete)=>{

    const result  = await axios.put(`/items/${id}`,{
      "id": 0,
      "name": "string",
      "isComplete": isComplete
    },{
      headers: {
        'Content-Type': 'application/json'
      }})
    return result.data;   
  },

  deleteTask:async(id)=>{
    
    const result  = await axios.delete(`/items/${id}`)
    return result.data;
  }
};
