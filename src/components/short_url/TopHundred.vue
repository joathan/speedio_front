<template>
  <div class="col">
    <div v-if="short_urls.length">
      <h4>Short Url List</h4>
      <table class="border">
        <tr>
          <th>Short</th>
          <th>URL</th>
          <th>Visits</th>
        </tr>
        <tr v-for="(short_url, index) in short_urls" :key="index">
          <td>
            <a @click="setVisitShortUrl(short_url.id)" :href="`${short_url.long_url}`"
                target="_blank">
              {{ short_url.shortened_url }}
            </a>
          </td>
          <td>{{ short_url.long_url }}</td>
          <td>{{ short_url.visits }}</td>
        </tr>
      </table>
    </div>
    <div v-else>
      <br />
      <p>we don't have any top hundred...</p>
      <router-link to="/" class="btn btn-dark">Back</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShortUrlDataService from "@/services/ShortUrlDataService";
import ShortUrl from "@/types/ShortUrl";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "top-short_urls",
  data() {
    return {
      short_urls: [] as ShortUrl[]
    };
  },
  methods: {
    retrieveShortUrls() {
      ShortUrlDataService.getTop100()
        .then((response: ResponseData) => {
          this.short_urls = response.data.data;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    setVisitShortUrl(id: number) {
      ShortUrlDataService.visit(id)
    },
  },
  mounted() {
    this.retrieveShortUrls();
  },
});
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}

td, th {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #ddd;
}
</style>
