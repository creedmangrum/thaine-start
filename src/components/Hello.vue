<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="people">
      <table class="people-table">
        <thead>
          <tr>
            <td>
              Name
            </td>
            <td>
              Skills
            </td>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(person, key) in people"
            v-bind:key="key">
            <td>
              {{person.name}}
            </td>
            <td>
              {{person.skills}}
            </td>
          </tr>
        </tbody>
      </table>
      <input type="text" v-model="newPersonName" placeholder="name"/>
      <button v-on:click="addPerson">Add Button</button>
    </div>
  </div>
</template>

<script>
import {people} from '../db/people.json'
import {skills} from '../utils/utils'

import fs from 'fs'

const peopleJson = JSON.parse(people)
peopleJson["4"] = {name: "maya", skills: ["swimming", "cello"]}

fs.writeFile("results.json", JSON.stringify(peopleJson))

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App - Thaine',
      newPersonName: '',
      db: {},
      people: people,
      skills: skills
    }
  },
  methods: {
    addPerson: function () {
      console.log(this.newPersonName)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.people {
  text-align: center
}

</style>
