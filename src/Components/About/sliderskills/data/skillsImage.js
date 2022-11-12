import gcp from "./skillimages/gcp.svg";
import html from "./skillimages/html.svg";
import photoshop from "./skillimages/photoshop.svg";
import illustrator from "./skillimages/illustrator.svg";
import docker from "./skillimages/docker.svg";
import adobeXd from "./skillimages/adobe-xd.svg";
import afterEffects from "./skillimages/after-effects.svg";
import css from "./skillimages/css.svg";
import angular from "./skillimages/angular.svg";
import javascript from "./skillimages/javascript.svg";
import nextJS from "./skillimages/nextJS.svg";
import nuxtJS from "./skillimages/nuxtJS.svg";
import react from "./skillimages/react.svg";
import svelte from "./skillimages/svelte.svg";
import typescript from "./skillimages/typescript.svg";
import vue from "./skillimages/vue.svg";
import bootstrap from "./skillimages/bootstrap.svg";
import bulma from "./skillimages/bulma.svg";
import capacitorjs from "./skillimages/capacitorjs.svg";
import coffeescript from "./skillimages/coffeescript.svg";
import memsql from "./skillimages/memsql.svg";
import mongoDB from "./skillimages/mongoDB.svg";
import mysql from "./skillimages/mysql.svg";
import postgresql from "./skillimages/postgresql.svg";
import tailwind from "./skillimages/tailwind.svg";
import vitejs from "./skillimages/vitejs.svg";
import vuetifyjs from "./skillimages/vuetifyjs.svg";
import c from "./skillimages/c.svg";
import cplusplus from "./skillimages/cplusplus.svg";
import csharp from "./skillimages/csharp.svg";
import dart from "./skillimages/dart.svg";
import go from "./skillimages/go.svg";
import java from "./skillimages/java.svg";
import julia from "./skillimages/julia.svg";
import kotlin from "./skillimages/kotlin.svg";
import matlab from "./skillimages/matlab.svg";
import php from "./skillimages/php.svg";
import python from "./skillimages/python.svg";
import ruby from "./skillimages/ruby.svg";
import swift from "./skillimages/swift.svg";
import adobeaudition from "./skillimages/adobeaudition.svg";
import aws from "./skillimages/aws.svg";
import deno from "./skillimages/deno.svg";
import django from "./skillimages/django.svg";
import firebase from "./skillimages/firebase.svg";
import gimp from "./skillimages/gimp.svg";
import git from "./skillimages/git.svg";
import graphql from "./skillimages/graphql.svg";
import lightroom from "./skillimages/lightroom.svg";
import materialui from "./skillimages/materialui.svg";
import nginx from "./skillimages/nginx.svg";
import numpy from "./skillimages/numpy.svg";
import opencv from "./skillimages/opencv.svg";
import premierepro from "./skillimages/premierepro.svg";
import pytorch from "./skillimages/pytorch.svg";
import selenium from "./skillimages/selenium.svg";
import strapi from "./skillimages/strapi.svg";
import tensorflow from "./skillimages/tensorflow.svg";
import webix from "./skillimages/webix.svg";
import wordpress from "./skillimages/wordpress.svg";

import azure from "./skillimages/azure.svg";
import blender from "./skillimages/blender.svg";
import fastify from "./skillimages/fastify.svg";
import figma from "./skillimages/figma.svg";
import flutter from "./skillimages/flutter.svg";
import haxe from "./skillimages/haxe.svg";
import ionic from "./skillimages/ionic.svg";
import markdown from "./skillimages/markdown.svg";
import microsoftoffice from "./skillimages/microsoftoffice.svg";
import picsart from "./skillimages/picsart.svg";
import sketch from "./skillimages/sketch.svg";
import unity from "./skillimages/unity.svg";
import wolframalpha from "./skillimages/wolframalpha.svg";

import canva from "./skillimages/canva.svg";
import redux from "./skillimages/redux.svg";
import express from "./skillimages/expressjs.svg";


import node from "./skillimages/nodejs.png";
import dsa from "./skillimages/dsa.png";
import postman from "./skillimages/postman.png";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "gcp":
      return gcp;
    case "html":
      return html;
    case "photoshop":
      return photoshop;
    case "docker":
      return docker;
    case "illustrator":
      return illustrator;
    case "adobe xd":
      return adobeXd;
    case "after effects":
      return afterEffects;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "nuxt js":
      return nuxtJS;
    case "react":
      return react;
    case "svelte":
      return svelte;
    case "typescript":
      return typescript;
    case "vue":
      return vue;
    case "bootstrap":
      return bootstrap;
    case "bulma":
      return bulma;
    case "capacitorjs":
      return capacitorjs;
    case "coffeescript":
      return coffeescript;
    case "memsql":
      return memsql;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "vuetifyjs":
      return vuetifyjs;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "c#":
      return csharp;
    case "dart":
      return dart;
    case "go":
      return go;
    case "java":
      return java;
    case "kotlin":
      return kotlin;
    case "julia":
      return julia;
    case "matlab":
      return matlab;
    case "php":
      return php;
    case "python":
      return python;
    case "ruby":
      return ruby;
    case "swift":
      return swift;
    case "adobe audition":
      return adobeaudition;
    case "aws":
      return aws;
    case "deno":
      return deno;
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "gimp":
      return gimp;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "lightroom":
      return lightroom;
    case "materialui":
      return materialui;
    case "nginx":
      return nginx;
    case "numpy":
      return numpy;
    case "opencv":
      return opencv;
    case "premiere pro":
      return premierepro;
    case "pytorch":
      return pytorch;
    case "selenium":
      return selenium;
    case "strapi":
      return strapi;
    case "tensorflow":
      return tensorflow;
    case "webix":
      return webix;
    case "wordpress":
      return wordpress;
    case "azure":
      return azure;
    case "blender":
      return blender;
    case "fastify":
      return fastify;
    case "figma":
      return figma;
    case "flutter":
      return flutter;
    case "haxe":
      return haxe;
    case "ionic":
      return ionic;
    case "markdown":
      return markdown;
    case "microsoft office":
      return microsoftoffice;
    case "picsart":
      return picsart;
    case "sketch":
      return sketch;
    case "unity":
      return unity;
    case "wolframalpha":
      return wolframalpha;
    case "canva":
      return canva;
    case "node js":
      return node;
    case "redux":
      return redux;
    case "express":
      return express;
    case "data structures":
      return dsa;
    case "postman":
      return postman;
    default:
      break;
  }
};
