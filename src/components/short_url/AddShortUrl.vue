<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Long Url</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="short_url.long_url"
          name="title"
        />
      </div>
      <button @click="saveShortUrl" class="btn btn-success mt-2">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
        <button class="btn btn-success m-4" @click="newShortUrl">Add</button>
        <router-link class="btn btn-primary" to="/">List Short URLs</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShortUrlDataService from "@/services/ShortUrlDataService";
import ShortUrl from "@/types/ShortUrl";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "add-short_url",
  data() {
    return {
      short_url: {
        id: null,
        long_url: "",
      } as ShortUrl,
      submitted: false,
    };
  },
  methods: {
    saveShortUrl() {
      let data = {
        long_url: this.short_url.long_url,
      };

      ShortUrlDataService.create(data)
        .then((response: ResponseData) => {
          this.short_url.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    newShortUrl() {
      this.submitted = false;
      this.short_url = {} as ShortUrl;
    },
  },
});
</script>

<style>
.submit-form {
  width: 100%;
  margin: auto;
}
</style>
