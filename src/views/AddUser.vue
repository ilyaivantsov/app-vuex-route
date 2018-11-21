<template>
  <div class="adduser">
    <add-new-user></add-new-user>
  </div>
</template>

<script>
// @ is an alias to /src
import AddNewUser from "@/components/content/AddNewUser.vue";

export default {
  name: "adduser",
  components: {
    AddNewUser
  }
};
</script>
