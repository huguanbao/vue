<template>
    <div>
        <h4>todolist</h4>
        <inputAdd @add = 'add'></inputAdd>
        <list :list = 'list' @del = 'del' @finish = 'finish'></list>
    </div>
</template>

<script>
import inputAdd from './input'
import list from './list'
export default{
    components:{
        inputAdd,list
    },
    data(){
        return{
            list:[
                {msg:"大吉大利,今晚吃鸡",show:true},
                {msg:"今晚上王者",show:false}
            ] 
        }
    },
    methods:{
        add(msg){
        this.list.push({msg:msg,show:false})
        },
        del(index){
            this.list.splice(index,1)
        },
        finish(index){
            this.list[index].show = true
        }
    }
}

</script>

<style>

</style>