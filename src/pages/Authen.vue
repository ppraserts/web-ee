<template>
    <div>
        <form>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-10">
                <input type="text" v-model="username" class="form-control" id="txtUsername" placeholder="Username">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                <input type="password" v-model="password"  class="form-control" id="txtPassword" placeholder="Password">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Token</label>
                <div class="col-sm-10">
                <input type="text" v-model="token" class="form-control" id="txtToken" placeholder="Token">
                </div>
            </div>
            <div class="form-group row">
                <b-button v-on:click="generateToken" variant="primary">สร้าง Token</b-button>
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data () {
        return {
            username: '',
            password: '',
            token:''
        }
    },
    methods: {
        generateToken: function(event) {
            let url = "http://api.mfu.ac.th:8090/misapi-test/authen/APILogin";
            axios.post(url, { username: this.username, password: this.password }).then((response) => {
               this.token = response.data.token;
               localStorage.setItem('token', response.data.token);
            });
        }
    }
}
</script>
