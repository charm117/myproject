<template>
  <div class="tranceContainer">
    <section class="UserBehaviorCard" v-for="(trance, index) in trances" :key="index">
      <div class="LeftTypeLine">
        <div class="CellTypeIconContainer" :class="cellContainerClass(trance)">
          <div class="CellTypeIcon" :class="cellIconClass(trance)"></div>
        </div>
        <div class="vertical-line"></div>
      </div>
      <div class="UserBehaviorCell" :class="cellClass(trance)">
        <div class="CellHeader">
          <div class="TypeTitle ng-binding">{{titleName(trance)}}</div>
        </div>
        <div class="CellBody">
          <ul>
            <li v-for="(value,key,index) in trance.data" :key="index">
              <div class="cellLeft">{{key}}:</div>
              <div class="cellRight">{{value}}</div></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import clickicon from "@/assets/click.svg"
import consoleicon from "@/assets/click.svg"
import erroricon from "@/assets/error.svg"
import navpushicon from "@/assets/navPush.svg"
import networkicon from "@/assets/network.svg"
export default {
  name: "tranceLine",
  props: {
    trances: {
      type: Array
    }
  },
  computed: {
    
  },
  data() {
    return {
      clickicon,
      consoleicon,
      erroricon,
      navpushicon,
      networkicon
    };
  },
  mounted: function() {
    // type 1=>click  2=>nwtwork 3=>console 4=>navpush 5=>error
  },
  methods: {
    cellContainerClass(trance){
      switch(trance.type){
        case 1:
          return 'ClickTypeBg';
          break;
        case 2:
          return 'RequestTypeBg';
          break;
        case 3:
          return 'ConsoleTypeBg';
          break;
        case 4:
          return 'NavpushTypeBg';
          break;
        case 5:
          return 'ErrorTypeBg';
          break;
      }
    },
    cellIconClass(trance){
      switch(trance.type){
        case 1:
          return 'ClickIconBg';
          break;
        case 2:
          return 'RequestIconBg';
          break;
        case 3:
          return 'ConsoleIconBg';
          break;
        case 4:
          return 'NavpushIconBg';
          break;
        case 5:
          return 'ErrorIconBg';
          break;
      }
    },
    cellClass(trance){
      switch(trance.type){
        case 1:
          return 'ClickCellHover';
          break;
        case 2:
          return 'RequestCellHover';
          break;
        case 3:
          return '';
          break;
        case 4:
          return '';
          break;
        case 5:
          return 'ErrorCellBorder';
          break;
      }
    },
    titleName(trance){
      switch(trance.type){
        case 1:
          return '点击';
          break;
        case 2:
          return 'HTTP请求';
          break;
        case 3:
          return 'console';
          break;
        case 4:
          return '跳转';
          break;
        case 5:
          return trance.data.message||'错误';
          break;
      }
    }
  }
};
</script>
<style>
.tranceContainer{
  width: 900px;
  margin: 0 auto;
  padding: 5px 5px;
  background: #fbfcfc;
  max-height: 600px;
  overflow: auto;
}
.tranceContainer::-webkit-scrollbar {
 width: 8px;
 transition: opacity .12s ease-out
}
 .tranceContainer::-webkit-scrollbar-track {
 background-color: #fff;
 -webkit-border-radius: 2em;
 -moz-border-radius: 2em;
 border-radius:2em;
}
 .tranceContainer::-webkit-scrollbar-thumb {
 background-color:rgba(144,147,153,.3);
 -webkit-border-radius: 2em;
 -moz-border-radius: 2em;
 border-radius:2em;
}
.UserBehaviorCard{
  display: flex;
  position: relative;
  margin-bottom: 15px;
  animation: slideup 0.3s forwards;
  animation-delay: 0.15s;
  opacity:0;
}
.UserBehaviorCard .LeftTypeLine{
  width: 30px;
}
.UserBehaviorCard .LeftTypeLine .CellTypeIconContainer{
    position: relative;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    margin-right: 5px;
    margin-top: 5px;
    padding: 4px;
    z-index: 1;
    box-sizing: border-box;
}
.UserBehaviorCard .LeftTypeLine .CellTypeIconContainer .CellTypeIcon{
    height: 16px;
    width: 16px;
    box-sizing: border-box;
}
.UserBehaviorCard .LeftTypeLine .CellTypeIconContainer.RequestTypeBg{
  background: #2ca3c0;
}
.UserBehaviorCard .LeftTypeLine .CellTypeIconContainer.ClickTypeBg{
  background: #61ba7b;
}
.UserBehaviorCard .LeftTypeLine .CellTypeIconContainer.ConsoleTypeBg{
  background: #efb74b;
}
.UserBehaviorCard .LeftTypeLine .CellTypeIconContainer.ErrorTypeBg{
  background: #db3522;
}
.UserBehaviorCard .LeftTypeLine .CellTypeIconContainer.NavpushTypeBg{
  background: #ca23ec;
}
.UserBehaviorCard .LeftTypeLine .CellTypeIconContainer .RequestIconBg{
    background-image: url(~@/assets/network.svg);
    background-size: 100%;
}
.UserBehaviorCard .LeftTypeLine .CellTypeIconContainer .ClickIconBg{
    background-image: url(~@/assets/click.svg);
    background-size: 100%;
}
.UserBehaviorCard .LeftTypeLine .CellTypeIconContainer .ConsoleIconBg{
    background-image: url(~@/assets/console.svg);
    background-size: 100%;
}
.UserBehaviorCard .LeftTypeLine .CellTypeIconContainer .ErrorIconBg{
    background-image: url(~@/assets/error.svg);
    background-size: 100%;
}
.UserBehaviorCard .LeftTypeLine .CellTypeIconContainer .NavpushIconBg{
    background-image: url(~@/assets/navPush.svg);
    background-size: 100%;
}
.UserBehaviorCard .LeftTypeLine .vertical-line{
    position: absolute;
    width: 2px;
    bottom: 0;
    top: 20px;
    background-color: #f2f3f3;
    z-index: 0;
    left: 11px;
    height: 100%;
    box-sizing: border-box;
}
.UserBehaviorCard .UserBehaviorCell{
  width: calc(100% - 30px);
  border-radius: 2px;
  box-shadow: 1px 1px 4px 1px rgba(0,0,0,.09);
  background-color: #fff;
  padding-bottom: 5px;
  padding-right: 10px;
}
.UserBehaviorCard .UserBehaviorCell.ClickCellHover:hover{
  outline: #61ba7b solid 1px;
}
.UserBehaviorCard .UserBehaviorCell.RequestCellHover:hover{
  outline: #2ca3c0 solid 1px;
}
.UserBehaviorCard .UserBehaviorCell.ErrorCellBorder{
  border: 2px solid #db3522
}
.UserBehaviorCard .UserBehaviorCell .CellHeader{
  width: 100%;
  height: 28px;
}
.UserBehaviorCell .TypeTitle{
    float: left;
    color: #4ba0be;
    font-weight: 700;
    padding: 5px 15px 5px 12px;
    font-size: 14px;
}
.CellBody ul{
  margin: 0;
  padding: 0;
  clear: both;
}
.CellBody ul li{
  list-style: none;
  line-height: 23px;
}
.CellBody .cellLeft{
  width: 110px;
  float: left;
  font-weight: 700;
  color: #2c3237;
  text-align: right;
  position: absolute;
  font-size: 14px;
}
.CellBody .cellRight{
  margin-left: 120px;
  word-break: break-all;
  word-wrap: break-word;
  text-align: left;
  font-size: 14px;
  height: 23px;
}
.UserBehaviorCard:nth-last-child(1) .vertical-line{
  display: none;
}
.UserBehaviorCard:nth-child(2) {
  animation-delay: 0.3s;
}
.UserBehaviorCard:nth-child(3) {
  animation-delay: 0.4s;
}
.UserBehaviorCard:nth-child(4) {
  animation-delay: 0.5s;
}
.UserBehaviorCard:nth-child(5) {
  animation-delay: 0.6s;
}
.UserBehaviorCard:nth-child(6) {
  animation-delay: 0.7s;
}
.UserBehaviorCard:nth-child(7) {
  animation-delay: 0.8s;
}
.UserBehaviorCard:nth-child(8) {
  animation-delay: 0.9s;
}
@keyframes slideup {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
.bottom-next-control{
    border: 1px solid #eaeefb;
    height: 44px;
    line-height: 44px;
    box-sizing: border-box;
    background-color: #000;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
}
</style>