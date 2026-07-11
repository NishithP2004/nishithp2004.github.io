import burpSuite from "simple-icons/icons/burpsuite.svg"
import cloudflare from "simple-icons/icons/cloudflare.svg"
import css from "simple-icons/icons/css.svg"
import docker from "simple-icons/icons/docker.svg"
import express from "simple-icons/icons/express.svg"
import facebook from "simple-icons/icons/facebook.svg"
import firebase from "simple-icons/icons/firebase.svg"
import github from "simple-icons/icons/github.svg"
import gitlab from "simple-icons/icons/gitlab.svg"
import googleChrome from "simple-icons/icons/googlechrome.svg"
import googleCloud from "simple-icons/icons/googlecloud.svg"
import googleScholar from "simple-icons/icons/googlescholar.svg"
import html from "simple-icons/icons/html5.svg"
import huggingFace from "simple-icons/icons/huggingface.svg"
import instagram from "simple-icons/icons/instagram.svg"
import javaScript from "simple-icons/icons/javascript.svg"
import java from "simple-icons/icons/openjdk.svg"
import kaggle from "simple-icons/icons/kaggle.svg"
import kaliLinux from "simple-icons/icons/kalilinux.svg"
import kubernetes from "simple-icons/icons/kubernetes.svg"
import langChain from "simple-icons/icons/langchain.svg"
import langGraph from "simple-icons/icons/langgraph.svg"
import medium from "simple-icons/icons/medium.svg"
import mcp from "simple-icons/icons/modelcontextprotocol.svg"
import mongoDb from "simple-icons/icons/mongodb.svg"
import neo4j from "simple-icons/icons/neo4j.svg"
import nodeJs from "simple-icons/icons/nodedotjs.svg"
import ollama from "simple-icons/icons/ollama.svg"
import orcid from "simple-icons/icons/orcid.svg"
import puppeteer from "simple-icons/icons/puppeteer.svg"
import python from "simple-icons/icons/python.svg"
import react from "simple-icons/icons/react.svg"
import redis from "simple-icons/icons/redis.svg"
import selenium from "simple-icons/icons/selenium.svg"
import snapchat from "simple-icons/icons/snapchat.svg"
import socketIo from "simple-icons/icons/socketdotio.svg"
import sqlite from "simple-icons/icons/sqlite.svg"
import tailwind from "simple-icons/icons/tailwindcss.svg"
import twitter from "simple-icons/icons/x.svg"
import youtube from "simple-icons/icons/youtube.svg"
import FaIcon from "./FaIcon"

const brandIcons = {
  burpSuite,
  cloudflare,
  css,
  docker,
  express,
  facebook,
  firebase,
  github,
  gitlab,
  googleChrome,
  googleCloud,
  googleScholar,
  html,
  huggingFace,
  instagram,
  javaScript,
  java,
  kaggle,
  kaliLinux,
  kubernetes,
  langChain,
  langGraph,
  medium,
  mcp,
  mongoDb,
  neo4j,
  nodeJs,
  ollama,
  orcid,
  puppeteer,
  python,
  react,
  redis,
  selenium,
  snapchat,
  socketIo,
  sqlite,
  tailwind,
  twitter,
  youtube,
}

function BrandIcon({ name, fallback = "code", className = "" }) {
  const iconUrl = brandIcons[name]

  if (!iconUrl) return <FaIcon name={fallback} className={className} />

  return <img className={`fa-icon brand-icon ${className}`.trim()} src={iconUrl} alt="" aria-hidden="true" />
}

export default BrandIcon
