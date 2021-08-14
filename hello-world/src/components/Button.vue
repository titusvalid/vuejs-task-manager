<template>
    <button @click="click()" class="btn">{{Text}}</button>
</template>

<script>
export default {
    name:"Button",

    props:{
        Text: String,
    },

    methods:{
        click(){
            console.log("boop")
        }
    },
}
</script>