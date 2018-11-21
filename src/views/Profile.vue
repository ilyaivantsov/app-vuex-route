<template>
  <div class="profile">
    <user-card></user-card>
  </div>
</template>

<script>
// @ is an alias to /src
import UserCard from "@/components/content/UserCard.vue";

export default {
  name: "profile",
  data: function() {
    return {};
  },
  components: {
    UserCard
  }
};
</script>
