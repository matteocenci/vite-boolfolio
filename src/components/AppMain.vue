<script>
    import axios from 'axios';

    export default {
        data(){
            return {
                projects:[]
            }
        },
        created () {
            axios.get('http://127.0.0.1:8000/api/projects').then((resp)=>{
                console.log(resp);
                this.projects = resp.data.result;
                console.log(projects);
            })
        }
    }
</script>

<template>
    
    <div class="container">
        <h1>Lista progetti</h1>
        <div class="row">
            <div class="col" v-for="project in projects">
                <div class="card">
                    <h4>Titolo</h4>
                    {{ project.name }}
                </div>
            </div>
        </div>

    </div>

</template>