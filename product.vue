<template>
  <div class="switchableGrid">
    <div class="container">
      <div class="bar">
        <h2>Porject</h2>
        <div class="btnHolder">
          <button
            :class="{ barActive: layout === 'grid' }"
            @click="layout = 'grid'"
          >
            <i class="fas fa-th"></i> Grid
          </button>
          <button
            :class="{ barActive: layout === 'list' }"
            @click="layout = 'list'"
          >
            <i class="fas fa-list"></i> List
          </button>
        </div>
      </div>

      <div class="content">
        <ul v-if="layout === 'grid'" class="grid">
          <li v-for="content in contents" :key="content.id">
            <div class="image">
              <img :src="content.imageSrc" />
            </div>
          </li>
        </ul>
        <!-- list -->
        <ul v-if="layout === 'list'" class="list">
          <li v-for="content in contents" :key="content.id">
            <img :src="content.imageSrc" />

            <div class="listContent">
              <h2>{{ content.title }}</h2>
              <p>{{ content.description }}</p>
              <a class="btn" href="#">Read more</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      contents: null,
      layout: "grid",
    };
  },
  mounted() {
    console.log("mounted call");
    axios.get("http:/bibekshakya.com/demo/vue/switchable-grid/api/products.json")
      .then((resp) => {
        console.log(resp);
        this.contents = resp.data;
      });
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: 16px/1.8 "Poppins", sans-serif;
  color: #333;
}

.container {
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
}

.switchableGrid {
  overflow: hidden;
  padding: 0 0 80px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: top;
}

/* 
bar 
---
*/
.bar {
  position: relative;
  padding: 20px 0;
  margin: 0 0 40px;
  text-align: right;
}

.bar:before {
  content: "";
  background: #333;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -999px;
  right: -999px;
}

.bar .btnHolder {
  display: flex;
  justify-content: flex-end;
}

.bar button {
  background: #fff;
  border: 0;
  display: block;
  text-decoration: none;
  padding: 10px 20px;
  margin: 0 0 0 10px;
  font: 14px/1.8 "Poppins", sans-serif;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
}

.bar button.barActive,
.bar button:hover,
.bar button:focus {
  transition: all 0.3s linear;
  background: #ff6b6b;
  color: #fff;
  outline: none;
}

.bar button i {
  margin: 0 5px 0 0;
}

/* 
grid view 
---------
*/
.grid {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
}

.grid li {
  width: 25%;
  padding: 10px;
  position: relative;
}

.grid li .image {
  overflow: hidden;
}

.grid li img {
  transition: transform 0.3s linear;
}

.grid li img:hover {
  transform: scale(1.1);
}

/* 
list view 
---------
*/
.list li {
  border-bottom: 1px solid #ddd;
  padding: 20px;
  overflow: hidden;
}

.list li:hover {
  background: #f9f9f9;
}

.list img {
  width: 160px;
  height: 190px;
  float: left;
  margin: 0 20px 0 0;
}

.list .listContent {
  display: block;
  overflow: hidden;
}

.list h2 {
  font-size: 20px;
  font-weight: 400;
  color: #ff6b6b;
  margin: 0 0 5px;
}

.list .listContent p {
  margin: 0 0 20px;
}

.list .btn {
  background: #ff6b6b;
  padding: 5px 20px;
  display: inline-block;
  vertical-align: top;
  color: #fff;
  text-decoration: none;
  border-radius: 3px;
  font-size: 14px;
  transition: background 0.3s linear;
}

.list .btn:hover {
  background: #ca3030;
}

/* 
responsive
----------
*/
@media only screen and (max-width: 639px) {
  body {
    font-size: 14px;
  }

  .grid li {
    width: 50%;
  }

  .list li {
    padding: 20px 0;
  }

  .list img {
    width: 100px;
    height: 120px;
  }
}
</style>
