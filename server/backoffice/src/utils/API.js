import axios from "axios";


const headers = {
    "content-Type":"application/json"
};


const url="Origin: http://localhost:8800";


export default {
    addEvent: function(name, eventPath,hostPath,floor,numberFloor) {
      return axios.post(
        `${url}/add`,
        {
            name,
            eventPath,
            hostPath,
            floor,
            numberFloor
        }
      ).then(response=>console.log(response));
    },
    home: function() {
      try {
        return axios.get(`${url}/`);
      } catch (error) {
         
         if (error.response) {
            console.log(error.response.status)
            console.log(error.response.data)
         }
         this.handleAxiosError(error)
      } 
    },
    event:function() {
      return axios.get(`${url}/event`);
    },
    eventid: function(){
      return axios.get(`${url}/eventid`).then(response=>console.log(response));
    },
    /*send:function() {
      return axios.get(`${url}/send`);
    }
  */

  };