<template>
  <div class="backgroud">
    <button class="update-btn" @click="updateData">更新数据</button>
    <div class="data-block block1">
      <span class="data-block-title">72CB</span>
      <div class="data-block-content">
        <div class="pane">
          <div class="number"><span>1</span></div>
          <div class="text">
            <div>{{data.a}}</div>
            <div>{{data.b}}</div>
          </div>
        </div>
        <div class="pane">
          <div class="number"><span>2</span></div>
          <div class="text">
            <div>{{data.a}}</div>
          </div>
        </div>
        <div class="pane">
          <div class="number"><span>3</span></div>
          <div class="text">
            <div>{{data.a}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      data: {}
    }
  },
  methods: {
    search() {
      // 请求数据 实际可以用axios替代
      setTimeout(() => {
        this.data = {
          a: 23,
          b: 0.33,
          c: 12
        }
      }, 100)
    },
    updateData() {
      // 更新数据 实际可以用axios替代
      setTimeout(() => {
        this.data = {
          a: Math.random(1).toFixed(2),
          b: (33 + Math.random(1)).toFixed(2),
          c: Math.random(10).toFixed(2)
        }
      }, 100)
    }
  },
  created() {
    this.search()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .backgroud {
    width: 450px;
    height: 300px;
    border: solid black 1px;
  }
  /* 绝对定位 */
  .block1 {
    position: absolute;
    top: 50px;
    left: 20px;
  }
  .data-block {
    width: 100px;
    text-align: center;
    &-content {
      border-style: solid;
      border-width: 1px 1px 0 1px;
      border-color: black;
      background: #d963a7;
      width: 100%;
      .pane {
        width: 100%;
        display: inline-flex;
        justify-content: center;
        .number {
          width: 20px;
          border-style: solid;
          border-width: 0 1px 1px 0;
          border-color: black;
          display: flex;
          justify-content: center;
          align-items: center;
          > span {
            height: 20px;
          }
        }
        .text {
          > * {
            border-bottom: solid black 1px;
          }
          flex: 1;
        }
      }
    }
    &-title {
      width: 20px;
      font-weight: bolder;
    }
  }
  .update-btn {
    margin: 10px;
  }


</style>
