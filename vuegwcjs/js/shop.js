var app=new Vue({
	el:"#app",
	//导入商品数据
	data:{
		goods:[{
			name:"小米电视大师 82英寸至尊纪念版",
			image:"img/shop/20201102150701.png",
			count:1,
			price:49999,
			isSel:false
		},{
			name:"新款27 英寸 iMac",
			image:"img/shop/20201102151619.png",
			count:1,
			price:14399,
			isSel:false
		},{
			name:"MacBook Pro 16 英寸",
			image:"img/shop/20201102151329.png",
			count:1,
			price:18999,
			isSel:false
		},{
			name:"iPad Pro",
			image:"img/shop/20201102152230.png",
			count:1,
			price:6299,
			isSel:false
		},{
			name:"iphone 11",
			image:"img/shop/20201102153027.png",
			count:1,
			price:5299,
			isSel:false
		}],
		//存放加入购物车的数据
		chatarr:[],
	},
	
	//定义计算方法
	computed: {
        // 计算商品总数
        countAll: function () {
          var sum = 0;
          for (var i in this.goods) {
            if (this.goods[i].isSel) {
              sum += this.goods[i].count;
            }
          }
          return sum;
        },

        // 计算所选商品总价
        totalPrice: function () {
          var sum1 = 0;
          for (var i in this.goods) {
            if (this.goods[i].isSel) {
              sum1 += this.goods[i].count * this.goods[i].price;
            }
          }
          return sum1;
        },
      },

      //定义方法
      methods: {
      	//添加至购物车
        // 点击减号
        decrease: function (index) {
          if (this.goods[index].count == 1) {
          	alert("修改数量不能小于0");
            return;
          } else {
            this.goods[index].count--;
          }
        },

        //点击加号
        add: function (index) {
          if (this.goods[index].count == 20) {
          	alert("购买的商品数量不能超过20件！");
            return;
          } else {
            this.goods[index].count++;
          }
        },
        // 点击全选
        checkedAll: function (e) {
          var isCheckedAll = e.target.checked; // e.target.checked 是当前复选框的状态值 true/false
          if (isCheckedAll) {
            for (var i in this.goods) {
              this.goods[i].isSel = true;
            }
          } else {
            for (var i in this.goods) {
              this.goods[i].isSel = false;
            }
          }
        },

        // 点击删除单条商品列表
        deleteThis: function (index) {
          var falg=confirm("您确定要删除此商品吗？");
          if (falg) {
          this.goods.splice(index,1);
          } else{
          return false;
          }  
        },

        // 点击删除所选商品列表
        deleteSelected: function () {
          for (var i = this.goods.length - 1; i >= 0; i--) {
            if (this.goods[i].isSel) {
              this.goods.splice(i, 1);
            }
          }
          alert("成功删除所选商品！");
        }
      } 
})