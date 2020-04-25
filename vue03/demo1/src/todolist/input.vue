<template>
    <div>
        <input type="text" v-model = "inputValue">
        <button @click = 'inputAdd'>add</button>
    </div>
</template>

<script>
export default{
    data(){
      return{
          inputValue:''
      }  
    },
    methods:{
        inputAdd(){
            this.$emit('add', this.inputValue)
        }        
    }
}

</script>

<style>

</style>
