# 每周总结可以写在这里
重学前端week11第二节编程与算法训练｜寻路问题（搜索），正则表达式
广度和深度优先的区别在于数据结构，上课用的那个东西，深度优先每次弹出来的都是下一级的最后一个，广度优先用shift每次弹出来的都是同一级的，同一级的所有都弹完了才会进行下一级的。

广度优先可以找到最优路径，深度不行。

另外所有用递归写不出来的东西，都可以用深度优先的方式去写，深度优先用的是栈。

启发函数跟启发函数算出来的值必定小于真实的到终点的距离，那么就一定能找到最佳路径。带启发函数的搜索叫A搜索。有一个手写的策略，先找的点和后找的点，A搜索不保证能找到最佳路径，数学家证明如果能找到启发函数永远返回的值是小于最优路径的，那一定能找到最优路径。
- 无序数组
```
class Sorted {
    constructor(data, compare) {
        this.data = data;
        this.compare = compare;
    }
    take() {
        if(!this.data.length) {
            return;
        }
        let min = this.data[0];
        let minIndex = 0;
        for (let i = 1; i < this.data.length; i++) {
            if (this.compare(this.data[i], min) < 0) {
                min = this.data[i];
                minIndex = i;
            }
        }
        this.data[minIndex] = this.data[this.data.length - 1];
        this.data.pop()
        return min;
    }
    insert(v) {
        this.data.push(v)
    }
    get length() {
        return this.data.length
    }
}
```