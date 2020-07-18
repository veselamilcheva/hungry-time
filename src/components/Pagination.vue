<template lang="html">

  <section class="pagination-wrap">
    <ul class="pagination">
      <li class="page-item first">
        <button class="page-link"  
          @click="onClickFirstPage"
          :disabled="isInFirstPage">First</button>
      </li> 
      <li class="page-item previous">
        <button class="page-link"   
          @click="onClickPreviousPage"
          :disabled="isInFirstPage">Previous</button>
      </li> 
      <li class="page-item page-number" v-for="page in pages">
        <button class="page-link"
          :class="{ active: isPageActive(page.name) }" 
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled">{{ page.name }}</button>
      </li>
      <li class="page-item next">
        <button class="page-link" 
          @click="onClickNextPage"
          :disabled="isInLastPage">Next</button>
      </li> 
      <li class="page-item last">
        <button class="page-link"  
          @click="onClickLastPage"
          :disabled="isInLastPage">Last</button>
      </li>
    </ul>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'pagination',
    props: {
      maxVisibleButtons: {
        type: Number,
        required: false,
        default: 5
      },
      totalPages: {
        type: Number,
        required: true
      },
      perPage: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      },
    },
    computed: {
      offset() {
        return Math.floor(this.maxVisibleButtons / 2);
      },
      startPage() {
        return Math.max(this.currentPage - this.offset, 1);
      },
      endPage() {
        return Math.min(this.currentPage + this.offset, this.totalPages);
      },
      pages() {
        const range = [];
        let startPage = this.startPage;
        let endPage = this.endPage;
        if (endPage - startPage < this.maxVisibleButtons - 1) {
          if (endPage < this.totalPages) {
            let desiredAddedPages = this.maxVisibleButtons - (endPage - startPage + 1);
            endPage = Math.min(endPage + desiredAddedPages, this.totalPages);
          }
          if (endPage - startPage < this.maxVisibleButtons - 1) {
            if (startPage > 1) {
              let desiredAddedPages = this.maxVisibleButtons - (endPage - startPage + 1);
              startPage = Math.max(startPage - desiredAddedPages, 1);
            }
          }
        }

        for (let i = startPage; i <= endPage; i++ ) {
          range.push({
            name: i,
            isDisabled: i === this.currentPage 
          });
        }

        return range;
      },
      isInFirstPage() {
        return this.currentPage === 1;
      },
      isInLastPage() {
        return this.currentPage === this.totalPages;
      },
    },
    methods: {
      onClickFirstPage() {
        this.$emit('pagechanged', 1);
      },
      onClickPreviousPage() {
        this.$emit('pagechanged', this.currentPage - 1);
      },
      onClickPage(page) {
        this.$emit('pagechanged', page);
      },
      onClickNextPage() {
        this.$emit('pagechanged', this.currentPage + 1);
      },
      onClickLastPage() {
        this.$emit('pagechanged', this.totalPages);    
      },
      isPageActive(page) {
        return this.currentPage === page;
      }
    }
  }
</script>

<style scoped lang="scss">
.pagination-wrap {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  .pagination {
    display: inline-flex;
  }
  .page-link {
    line-height: 1.25;
    color: #484848;
    font-size: 18px;
    font-weight: 700;
    background-color: #fff;
    border: 1px solid #dee2e6;
    padding: 6px 12px;
    cursor: pointer;
  }
  .page-item {
    margin: 0;
  }
  .page-item:first-child .page-link {
    margin-left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .page-item:last-child .page-link {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .page-item .page-link[disabled] {
    color: #878888;
    cursor: auto;
    background-color: #fff;
    border-color: #dee2e6;
  }
  .page-item .page-link.active {
    color: #fff;
    background-color: #1183a8;
    border-color: #1183a8;
  }
}
</style>
