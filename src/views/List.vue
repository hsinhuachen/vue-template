<template>
    <div class="content">
        <h1>List</h1>
        <div id="list">
            <p v-for="item in lists" :key="item.id">{{ item.name }}</p>
        </div>
    </div>
</template>

<script>
import Vue from 'vue' 
import axios from 'axios'
import VueAxios from 'vue-axios'

let cors = require('cors')

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT, DELETE';

Vue.use(VueAxios, axios)
export default {
    data: function() {
        return  {
            token: "",
            lists: []
        }
    },
    methods: {
        getToken: function() {
            var self = this; 
            Vue.axios.post("V1/api/", {}).then((res) => {
                self.token = res.data.token;
                self.getSpecificationList();
            })
        }
    },
    created: function(){
        this.getToken();
    }
}
</script>
