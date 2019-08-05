<template>
    <div>
        <ul class="list">
            <li v-for="item in lists" :key="item.id" @click="showDesc()">
                <div class="img">
                    <img :src="item.img_url" :alt="item.desc">
                </div>
            </li>
        </ul>
        <div id="desc"></div>        
    </div>
</template>
<style scoped>
</style>

<script>
import itemDesc from './itemDesc.vue'
import Vue from 'vue'
export default {
    name:'list',
    data(){
        return {
            lists:[
                {
                    id:'001',
                    desc:'001简单描述，总的看看这是啥。啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                    img_url:'http://img1.gtimg.com/15/1580/158031/15803178_1200x1000_0.jpg'
                },
                {
                    id:'002',
                    desc:'002简单描述，总的看看这是啥。啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                    img_url:'http://img1.gtimg.com/15/1580/158031/15803183_1200x1000_0.jpg'
                },
                {
                    id:'003',
                    desc:'003简单描述，总的看看这是啥。啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                    img_url:'http://img1.gtimg.com/15/1580/158031/15803179_1200x1000_0.jpg'
                },
                {
                    id:'004',
                    desc:'004简单描述，总的看看这是啥。啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                    img_url:'http://img1.gtimg.com/15/1580/158031/15803181_1200x1000_0.jpg'
                },
                {
                    id:'005',
                    desc:'005简单描述，总的看看这是啥。啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                    img_url:'http://img1.gtimg.com/15/1580/158031/15803182_1200x1000_0.jpg'
                }
            ],
            itemDescCom:null
        }
    },
    methods:{
            showDesc() {
                let descCon = Vue.extend(itemDesc);
                this.itemDescCom = new descCon().$mount("#desc")
            }
    },
    components:{itemDesc}
}
</script>
