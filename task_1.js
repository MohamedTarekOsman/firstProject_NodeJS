const fs = require("fs");
const yargs = require("yargs");
const data=require("./data")
yargs.command({
  command: "add",
  describe: "add an item",
  builder: {
    id: {
      describe: "add id",
      type: "string",
      demandOption: true,
    },
    fname: {
      describe: "add first name",
      type: "string",
      demandOption: false,
    },
    lname: {
      describe: "add last name",
      type: "string",
      demandOption: false,
    },
    age: {
      describe: "add age",
      type: "string",
      demandOption: false,
    },
    city: {
      describe: "add city",
      type: "string",
      demandOption: false,
    },
    phone: {
      describe: "add phone",
      type: "string",
      demandOption: false,
    },
  },
  handler: (x) => {
    data.addperson(x.id,x.fname,x.lname,x.age,x.city,x.phone);
  },
});


yargs.command({
  command: "delete",
  describe: "delete an item",
  builder: {
    id: {
      describe: "add id",
      type: "string",
      demandOption: true,
    },
  },
  handler: (x) => {
    data.delperson(x.id);
  },
});


yargs.command({
  command: "list",
  describe: "delete an item",
  builder: {
    id: {
      describe: "add id",
      type: "string",
      demandOption: true,
    },
  },
  handler: (x) => {
    data.details_person(x.id);
  },
});

yargs.command({
  command: "read",
  describe: "delete an item",
  builder: {
    id: {
      describe: "add id",
      type: "string",
      demandOption: true,
    },
  },
  handler: (x) => {
    data.read_id(x.id);
  },
});
yargs.parse();