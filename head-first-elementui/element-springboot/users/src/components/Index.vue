<template>
    <div>
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="image in images" :key="image">
                <el-image
                    style="width: 600px; height: 300px"
                    :src="image"
                    fit="contain"></el-image>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
// 引入图片
import jpg1 from "../assets/imgs/11.jpg"
import jpg2 from "../assets/imgs/22.jpg"
export default {
    name: "Index",
    data() {
        return {
            images: [jpg1, jpg2],
        }
    }
}
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
