# Todo Summary Assistant

A full-stack Todo Summary Assistant application with a React frontend and Java (Spring Boot) backend. The app summarizes your to-dos using an LLM (Large Language Model) and can post summaries to a Slack channel.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Architecture & Design Decisions](#architecture--design-decisions)
- [Environment Variables](#environment-variables)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Slack Integration Setup](#slack-integration-setup)
- [LLM Setup Guidance](#llm-setup-guidance)
- [Usage](#usage)
- [License](#license)

---

## Overview

This project provides a streamlined workflow for managing to-dos, generating natural language summaries using an LLM, and optionally posting those summaries to a Slack channel. The backend is built with Java Spring Boot, serving REST APIs consumed by a React frontend. The backend also handles integration with the Slack API and an LLM API (e.g., OpenAI, Gemini, or other).

---

## Features

- Create, update, delete, and view to-dos
- Generate summarized descriptions of pending to-dos using an LLM
- Post generated summaries to a Slack channel automatically
- Authentication and environment-based configuration for secure usage

---

## Architecture & Design Decisions

- **Separation of Concerns:** React frontend handles UI and user interaction, while Spring Boot backend manages business logic, LLM communication, and Slack API calls.
- **RESTful APIs:** Backend exposes REST endpoints for CRUD operations and summary generation.
- **Environment Variables:** Secure management of sensitive API keys and configuration.
- **Modular Slack & LLM Integration:** Slack and LLM APIs are abstracted into service layers for easier maintenance and possible provider swaps.
- **Scalability:** Backend designed to easily add features like authentication, task categorization, or multi-user support.
- **Stateless Backend:** Backend does not maintain session state, enabling easy horizontal scaling.

---

## Environment Variables

Create a `.env` file in your backend root directory or set environment variables appropriately.

```env
# Backend
SERVER_PORT=8080

# Slack API
SLACK_BOT_TOKEN=xoxb-your-slack-bot-token
SLACK_CHANNEL_ID=CXXXXXXXXXX

# LLM API (e.g., OpenAI, Gemini)
LLM_API_KEY=your-llm-api-key
LLM_API_URL=https://api.llmprovider.com/v1/summarize

# Optional - Other configs
LOG_LEVEL=INFO
