# 平时作业 集合

## 1 - 三角形面积计算

## 线性表连续插入

### 单链表插入

```java
    /**
     * 将链表中的全部内容都添加到某个位置之后
     * @param i     位置
     * @param list  链表
     */
    public void addAll(int i, SingleLinkedList list) {
        // 检查长度
        checkBounds(i,0,size);
        ListNode nextOne = getNth(i);
        nextOne.next = list.head;
        list.getNth(list.size).next = nextOne;
    }

    /**
     * 合并两个节点
     * @param list  链表
     * @return      合并之后的节点
     */
    public SingleLinkedList union(SingleLinkedList list) {
        this.addAll(size,list);
        return this;
    }
```

### 顺序表插入

```java
    /**
     * 添加新的顺序表到当前的表尾
     * @param list  待添加的顺序表
     * @return      添加好的顺序表
     */
    public SequentialList<T> addAll(SequentialList<T> list){
        int newLength = (int) ((list.length + this.length) * 1.5);
        SequentialList<T> newElementArray = new SequentialList<>();
        for (int i = 0; i < list.length+this.length; i++) {
            if (i < this.length){
                newElementArray.insert(this.data_list[i]);
            }else {
                newElementArray.insert(this.data_list[i - this.length]);
            }
        }
        return newElementArray;
    }
```

