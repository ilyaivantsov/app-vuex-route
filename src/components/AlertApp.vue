<template>
    <div class="container-fluid px-0" v-if="alert.active">
        <div v-bind:class="[alert.status,{show:alert.active}]" class="alert alert-dismissible fade m-0">
            {{alert.message}}
          <button type="button" class="close" @click="close()">
            <span aria-hidden="true">×</span>
          </button>
       </div>
    </div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  computed: {
    alert() {
      return this.$store.state.alert;
    }
  },
  methods: {
    close() {
      this.alert.active = false;
    }
  }
};
</script>
