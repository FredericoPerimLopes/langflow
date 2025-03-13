"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[3142],{96867:(e,t,n)=>{n.r(t),n.d(t,{CH:()=>h,assets:()=>c,chCodeConfig:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"Tutorials/tutorials-sequential-agent","title":"Sequential tasks agent","description":"Build a Sequential Tasks Agent flow for a multi-agent application using multiple Agent components.","source":"@site/docs/Tutorials/tutorials-sequential-agent.md","sourceDirName":"Tutorials","slug":"/tutorials-sequential-agent","permalink":"/tutorials-sequential-agent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Sequential tasks agent","slug":"/tutorials-sequential-agent"},"sidebar":"docs","previous":{"title":"Math agent","permalink":"/tutorials-math-agent"},"next":{"title":"Travel planning agent","permalink":"/tutorials-travel-planning-agent"}}');var s=n(74848),r=n(28453),a=n(24754);const i={title:"Sequential tasks agent",slug:"/tutorials-sequential-agent"},l=void 0,c={},h={annotations:a.hk,Code:a.Cy},d={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Open Langflow and create a new flow",id:"open-langflow-and-create-a-new-flow",level:2},{value:"Run the Sequential Tasks Agent flow",id:"run-the-sequential-tasks-agent-flow",level:2},{value:"Next steps",id:"next-steps",level:2}];function g(e){const t={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return h||f("CH",!1),h.Code||f("CH.Code",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,s.jsxs)(t.p,{children:["Build a ",(0,s.jsx)(t.strong,{children:"Sequential Tasks Agent"})," flow for a multi-agent application using multiple ",(0,s.jsx)(t.strong,{children:"Agent"})," components."]}),"\n",(0,s.jsxs)(t.p,{children:["Each agent has an LLM model and a unique set of tools at its disposal, with ",(0,s.jsx)(t.strong,{children:"Prompt"})," components connected to the ",(0,s.jsx)(t.strong,{children:"Agent Instructions"})," fields to control the agent's behavior. For example, the ",(0,s.jsx)(t.strong,{children:"Researcher Agent"})," has a ",(0,s.jsx)(t.strong,{children:"Tavily AI Search"})," component connected as a tool. The ",(0,s.jsx)(t.strong,{children:"Prompt"})," instructs the agent how to answer your query, format the response, and pass the query and research results on to the next agent in the flow."]}),"\n",(0,s.jsx)(t.p,{children:"Each successive agent in the flow builds on the work of the previous agent, creating a chain of reasoning for solving complex problems."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://platform.openai.com/",children:"An OpenAI API key"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.tavily.com/",children:"A Tavily AI API key"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"open-langflow-and-create-a-new-flow",children:"Open Langflow and create a new flow"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"New Flow"}),", and then select ",(0,s.jsx)(t.strong,{children:"Sequential Tasks Agent"}),".\nThis opens a starter template with the necessary components to run the flow."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Starter flow for Sequential Tasks Agent",src:n(97807).A+"",width:"2908",height:"1106"})}),"\n",(0,s.jsx)(t.p,{children:"The Sequential Tasks Agent flow consists of these components:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Agent"})," components use the connected LLM to analyze the user's input and select among the connected tools to complete the tasks."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Chat Input"})," component accepts user input to the chat."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Prompt"})," component combines the user input with a user-defined prompt."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Chat Output"})," component prints the flow's output to the chat."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"YFinance"})," tool component provides access to financial data from Yahoo Finance."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Tavily AI Search"})," tool component performs AI-powered web searches."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Calculator"})," tool component performs mathematical calculations."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"run-the-sequential-tasks-agent-flow",children:"Run the Sequential Tasks Agent flow"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Add your OpenAI API key to the ",(0,s.jsx)(t.strong,{children:"Agent"})," components."]}),"\n",(0,s.jsxs)(t.li,{children:["Add your Tavily API key to the ",(0,s.jsx)(t.strong,{children:"Tavily"})," component."]}),"\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"Playground"})," to start a chat session with the template's default question."]}),"\n"]}),"\n",(0,s.jsx)(h.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"Should I invest in Tesla (TSLA) stock right now?",props:{}}]},{tokens:[{content:"Please analyze the company's current position, market trends,",props:{}}]},{tokens:[{content:"financial health, and provide a clear investment recommendation.",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,s.jsx)(t.p,{children:"This question provides clear instructions to the agents about how to proceed and what question to answer."}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:["In the ",(0,s.jsx)(t.strong,{children:"Playground"}),", inspect the answers to see how the agents use the ",(0,s.jsx)(t.strong,{children:"Tavily AI Search"})," tool to research the query, the ",(0,s.jsx)(t.strong,{children:"YFinance"})," tool to analyze the stock data, and the ",(0,s.jsx)(t.strong,{children:"Calculator"})," to determine if the stock is a wise investment."]}),"\n",(0,s.jsx)(t.li,{children:"Ask similar questions to see how the agents use the tools to answer your queries."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsxs)(t.p,{children:["To create your own multi-agent flow, see ",(0,s.jsx)(t.a,{href:"/agents-tool-calling-agent-component",children:"Create a problem solving agent"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}function f(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},97807:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/starter-flow-sequential-agent-ccd15bee6bedbe3a33c81a12c10d6475.png"}}]);