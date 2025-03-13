"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[7338],{28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var n=s(96540);const r={},d=n.createContext(r);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(d.Provider,{value:t},e.children)}},31154:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"Components/components-helpers","title":"Helpers","description":"Helper components provide utility functions to help manage data, tasks, and other components in your flow.","source":"@site/docs/Components/components-helpers.md","sourceDirName":"Components","slug":"/components-helpers","permalink":"/components-helpers","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Helpers","slug":"/components-helpers"},"sidebar":"docs","previous":{"title":"Embeddings","permalink":"/components-embedding-models"},"next":{"title":"Inputs and outputs","permalink":"/components-io"}}');var r=s(74848),d=s(28453);const i={title:"Helpers",slug:"/components-helpers"},l="Helper components in Langflow",h={},c=[{value:"Use a helper component in a flow",id:"use-a-helper-component-in-a-flow",level:2},{value:"Batch Run Component",id:"batch-run-component",level:2},{value:"Inputs",id:"inputs",level:3},{value:"Outputs",id:"outputs",level:3},{value:"Create List",id:"create-list",level:2},{value:"Inputs",id:"inputs-1",level:3},{value:"Outputs",id:"outputs-1",level:3},{value:"Current date",id:"current-date",level:2},{value:"Inputs",id:"inputs-2",level:3},{value:"Outputs",id:"outputs-2",level:3},{value:"ID Generator",id:"id-generator",level:2},{value:"Inputs",id:"inputs-3",level:3},{value:"Outputs",id:"outputs-3",level:3},{value:"Message history",id:"message-history",level:2},{value:"Inputs",id:"inputs-4",level:3},{value:"Outputs",id:"outputs-4",level:3},{value:"Message store",id:"message-store",level:2},{value:"Inputs",id:"inputs-5",level:3},{value:"Outputs",id:"outputs-5",level:3},{value:"Structured output",id:"structured-output",level:2},{value:"Inputs",id:"inputs-6",level:3},{value:"Outputs",id:"outputs-6",level:3}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"helper-components-in-langflow",children:"Helper components in Langflow"})}),"\n",(0,r.jsx)(t.p,{children:"Helper components provide utility functions to help manage data, tasks, and other components in your flow."}),"\n",(0,r.jsx)(t.h2,{id:"use-a-helper-component-in-a-flow",children:"Use a helper component in a flow"}),"\n",(0,r.jsxs)(t.p,{children:["Chat memory in Langflow is stored either in local Langflow tables with ",(0,r.jsx)(t.code,{children:"LCBufferMemory"}),", or connected to an external database."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Store Message"})," helper component stores chat memories as ",(0,r.jsx)(t.a,{href:"/concepts-objects",children:"Data"})," objects, and the ",(0,r.jsx)(t.strong,{children:"Message History"})," helper component retrieves chat messages as data objects or strings."]}),"\n",(0,r.jsxs)(t.p,{children:["This example flow stores and retrieves chat history from an ",(0,r.jsx)(t.a,{href:"/components-memories#astradbchatmemory-component",children:"AstraDBChatMemory"})," component with ",(0,r.jsx)(t.strong,{children:"Store Message"})," and ",(0,r.jsx)(t.strong,{children:"Chat Memory"})," components."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Sample Flow storing Chat Memory in AstraDB",src:s(72654).A+"",width:"3178",height:"1228"})}),"\n",(0,r.jsx)(t.h2,{id:"batch-run-component",children:"Batch Run Component"}),"\n",(0,r.jsxs)(t.p,{children:["The Batch Run component runs a language model over each row of a ",(0,r.jsx)(t.a,{href:"/concepts-objects#dataframe-object",children:"DataFrame"})," text column and returns a new DataFrame with the original text and the model's response."]}),"\n",(0,r.jsx)(t.h3,{id:"inputs",children:"Inputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Display Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Info"}),(0,r.jsx)(t.th,{children:"Required"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"model"}),(0,r.jsx)(t.td,{children:"Language Model"}),(0,r.jsx)(t.td,{children:"HandleInput"}),(0,r.jsx)(t.td,{children:"Connect the 'Language Model' output from your LLM component here."}),(0,r.jsx)(t.td,{children:"Yes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"system_message"}),(0,r.jsx)(t.td,{children:"System Message"}),(0,r.jsx)(t.td,{children:"MultilineInput"}),(0,r.jsx)(t.td,{children:"Multi-line system instruction for all rows in the DataFrame."}),(0,r.jsx)(t.td,{children:"No"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"df"}),(0,r.jsx)(t.td,{children:"DataFrame"}),(0,r.jsx)(t.td,{children:"DataFrameInput"}),(0,r.jsx)(t.td,{children:"The DataFrame whose column (specified by 'column_name') will be treated as text messages."}),(0,r.jsx)(t.td,{children:"Yes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"column_name"}),(0,r.jsx)(t.td,{children:"Column Name"}),(0,r.jsx)(t.td,{children:"StrInput"}),(0,r.jsx)(t.td,{children:"The name of the DataFrame column to treat as text messages. Default='text'."}),(0,r.jsx)(t.td,{children:"Yes"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"outputs",children:"Outputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Display Name"}),(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Info"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"batch_results"}),(0,r.jsx)(t.td,{children:"Batch Results"}),(0,r.jsx)(t.td,{children:"run_batch"}),(0,r.jsx)(t.td,{children:"A DataFrame with two columns: 'text_input' and 'model_response'."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"create-list",children:"Create List"}),"\n",(0,r.jsx)(t.p,{children:"This component dynamically creates a record with a specified number of fields."}),"\n",(0,r.jsx)(t.h3,{id:"inputs-1",children:"Inputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Display Name"}),(0,r.jsx)(t.th,{children:"Info"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"n_fields"}),(0,r.jsx)(t.td,{children:"Number of Fields"}),(0,r.jsx)(t.td,{children:"Number of fields to be added to the record."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"text_key"}),(0,r.jsx)(t.td,{children:"Text Key"}),(0,r.jsx)(t.td,{children:"Key used as text."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"outputs-1",children:"Outputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Display Name"}),(0,r.jsx)(t.th,{children:"Info"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"list"}),(0,r.jsx)(t.td,{children:"List"}),(0,r.jsx)(t.td,{children:"The dynamically created list with the specified number of fields."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"current-date",children:"Current date"}),"\n",(0,r.jsx)(t.p,{children:"The Current Date component returns the current date and time in a selected timezone. This component provides a flexible way to obtain timezone-specific date and time information within a Langflow pipeline."}),"\n",(0,r.jsx)(t.h3,{id:"inputs-2",children:"Inputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Display Name"}),(0,r.jsx)(t.th,{children:"Info"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timezone"}),(0,r.jsx)(t.td,{children:"Timezone"}),(0,r.jsx)(t.td,{children:"Select the timezone for the current date and time."})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"outputs-2",children:"Outputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Display Name"}),(0,r.jsx)(t.th,{children:"Info"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"current_date"}),(0,r.jsx)(t.td,{children:"Current Date"}),(0,r.jsx)(t.td,{children:"The resulting current date and time in the selected timezone."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"id-generator",children:"ID Generator"}),"\n",(0,r.jsx)(t.p,{children:"This component generates a unique ID."}),"\n",(0,r.jsx)(t.h3,{id:"inputs-3",children:"Inputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Display Name"}),(0,r.jsx)(t.th,{children:"Info"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"unique_id"}),(0,r.jsx)(t.td,{children:"Value"}),(0,r.jsx)(t.td,{children:"The generated unique ID."})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"outputs-3",children:"Outputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Display Name"}),(0,r.jsx)(t.th,{children:"Info"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsx)(t.td,{children:"ID"}),(0,r.jsx)(t.td,{children:"The generated unique ID."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"message-history",children:"Message history"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"Prior to Langflow 1.1, this component was known as the Chat Memory component."})}),"\n",(0,r.jsx)(t.p,{children:"This component retrieves and manages chat messages from Langflow tables or an external memory."}),"\n",(0,r.jsx)(t.h3,{id:"inputs-4",children:"Inputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Display Name"}),(0,r.jsx)(t.th,{children:"Info"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"memory"}),(0,r.jsx)(t.td,{children:"External Memory"}),(0,r.jsx)(t.td,{children:"Retrieve messages from an external memory. If empty, it will use the Langflow tables."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sender"}),(0,r.jsx)(t.td,{children:"Sender Type"}),(0,r.jsx)(t.td,{children:"Filter by sender type."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sender_name"}),(0,r.jsx)(t.td,{children:"Sender Name"}),(0,r.jsx)(t.td,{children:"Filter by sender name."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"n_messages"}),(0,r.jsx)(t.td,{children:"Number of Messages"}),(0,r.jsx)(t.td,{children:"Number of messages to retrieve."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"session_id"}),(0,r.jsx)(t.td,{children:"Session ID"}),(0,r.jsx)(t.td,{children:"The session ID of the chat. If empty, the current session ID parameter will be used."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"order"}),(0,r.jsx)(t.td,{children:"Order"}),(0,r.jsx)(t.td,{children:"Order of the messages."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"template"}),(0,r.jsx)(t.td,{children:"Template"}),(0,r.jsxs)(t.td,{children:["The template to use for formatting the data. It can contain the keys ",(0,r.jsx)(t.code,{children:"{text}"}),", ",(0,r.jsx)(t.code,{children:"{sender}"})," or any other key in the message data."]})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"outputs-4",children:"Outputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Display Name"}),(0,r.jsx)(t.th,{children:"Info"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"messages"}),(0,r.jsx)(t.td,{children:"Messages (Data)"}),(0,r.jsx)(t.td,{children:"Retrieved messages as Data objects."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"messages_text"}),(0,r.jsx)(t.td,{children:"Messages (Text)"}),(0,r.jsx)(t.td,{children:"Retrieved messages formatted as text."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lc_memory"}),(0,r.jsx)(t.td,{children:"Memory"}),(0,r.jsxs)(t.td,{children:["A constructed Langchain ",(0,r.jsx)(t.a,{href:"https://api.python.langchain.com/en/latest/memory/langchain.memory.buffer.ConversationBufferMemory.html",children:"ConversationBufferMemory"})," object"]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"message-store",children:"Message store"}),"\n",(0,r.jsx)(t.p,{children:"This component stores chat messages or text into Langflow tables or an external memory."}),"\n",(0,r.jsx)(t.p,{children:"It provides flexibility in managing message storage and retrieval within a chat system."}),"\n",(0,r.jsx)(t.h3,{id:"inputs-5",children:"Inputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Display Name"}),(0,r.jsx)(t.th,{children:"Info"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"message"}),(0,r.jsx)(t.td,{children:"Message"}),(0,r.jsx)(t.td,{children:"The chat message to be stored. (Required)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"memory"}),(0,r.jsx)(t.td,{children:"External Memory"}),(0,r.jsx)(t.td,{children:"The external memory to store the message. If empty, it will use the Langflow tables."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sender"}),(0,r.jsx)(t.td,{children:"Sender"}),(0,r.jsx)(t.td,{children:"The sender of the message. Can be Machine or User. If empty, the current sender parameter will be used."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sender_name"}),(0,r.jsx)(t.td,{children:"Sender Name"}),(0,r.jsx)(t.td,{children:"The name of the sender. Can be AI or User. If empty, the current sender parameter will be used."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"session_id"}),(0,r.jsx)(t.td,{children:"Session ID"}),(0,r.jsx)(t.td,{children:"The session ID of the chat. If empty, the current session ID parameter will be used."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"outputs-5",children:"Outputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Display Name"}),(0,r.jsx)(t.th,{children:"Info"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"stored_messages"}),(0,r.jsx)(t.td,{children:"Stored Messages"}),(0,r.jsx)(t.td,{children:"The list of stored messages after the current message has been added."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"structured-output",children:"Structured output"}),"\n",(0,r.jsx)(t.p,{children:"This component transforms LLM responses into structured data formats."}),"\n",(0,r.jsxs)(t.p,{children:["In this example from the ",(0,r.jsx)(t.strong,{children:"Financial Support Parser"})," template, the ",(0,r.jsx)(t.strong,{children:"Structured Output"})," component transforms unstructured financial reports into structured data."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Structured output example",src:s(82798).A+"",width:"2554",height:"1548"})}),"\n",(0,r.jsxs)(t.p,{children:["The connected LLM model is prompted by the ",(0,r.jsx)(t.strong,{children:"Structured Output"})," component's ",(0,r.jsx)(t.code,{children:"Format Instructions"})," parameter to extract structured output from the unstructured text. ",(0,r.jsx)(t.code,{children:"Format Instructions"})," is utilized as the system prompt for the ",(0,r.jsx)(t.strong,{children:"Structured Output"})," component."]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.strong,{children:"Structured Output"})," component, click the ",(0,r.jsx)(t.strong,{children:"Open table"})," button to view the ",(0,r.jsx)(t.code,{children:"Output Schema"})," table.\nThe ",(0,r.jsx)(t.code,{children:"Output Schema"})," parameter defines the structure and data types for the model's output using a table with the following fields:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Name"}),": The name of the output field."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Description"}),": The purpose of the output field."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Type"}),": The data type of the output field. The available types are ",(0,r.jsx)(t.code,{children:"str"}),", ",(0,r.jsx)(t.code,{children:"int"}),", ",(0,r.jsx)(t.code,{children:"float"}),", ",(0,r.jsx)(t.code,{children:"bool"}),", ",(0,r.jsx)(t.code,{children:"list"}),", or ",(0,r.jsx)(t.code,{children:"dict"}),". The default is ",(0,r.jsx)(t.code,{children:"text"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Multiple"}),": This feature is deprecated. Currently, it is set to ",(0,r.jsx)(t.code,{children:"True"})," by default if you expect multiple values for a single field. For example, a ",(0,r.jsx)(t.code,{children:"list"})," of ",(0,r.jsx)(t.code,{children:"features"})," is set to ",(0,r.jsx)(t.code,{children:"True"})," to contain multiple values, such as ",(0,r.jsx)(t.code,{children:'["waterproof", "durable", "lightweight"]'}),". Default: ",(0,r.jsx)(t.code,{children:"True"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Parse DataFrame"})," component parses the structured output into a template for orderly presentation in chat output. The template receives the values from the ",(0,r.jsx)(t.code,{children:"output_schema"})," table with curly braces."]}),"\n",(0,r.jsxs)(t.p,{children:["For example, the template ",(0,r.jsx)(t.code,{children:"EBITDA: {EBITDA}  ,  Net Income: {NET_INCOME} , GROSS_PROFIT: {GROSS_PROFIT}"})," presents the extracted values in the ",(0,r.jsx)(t.strong,{children:"Playground"})," as ",(0,r.jsx)(t.code,{children:"EBITDA: 900 million , Net Income: 500 million , GROSS_PROFIT: 1.2 billion"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"inputs-6",children:"Inputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Display Name"}),(0,r.jsx)(t.th,{children:"Info"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"llm"}),(0,r.jsx)(t.td,{children:"Language Model"}),(0,r.jsx)(t.td,{children:"The language model to use to generate the structured output."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"input_value"}),(0,r.jsx)(t.td,{children:"Input Message"}),(0,r.jsx)(t.td,{children:"The input message to the language model."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"system_prompt"}),(0,r.jsx)(t.td,{children:"Format Instructions"}),(0,r.jsx)(t.td,{children:"Instructions to the language model for formatting the output."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"schema_name"}),(0,r.jsx)(t.td,{children:"Schema Name"}),(0,r.jsx)(t.td,{children:"The name for the output data schema."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"output_schema"}),(0,r.jsx)(t.td,{children:"Output Schema"}),(0,r.jsx)(t.td,{children:"Defines the structure and data types for the model's output."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"multiple"}),(0,r.jsx)(t.td,{children:"Generate Multiple"}),(0,r.jsxs)(t.td,{children:["[Deprecated] Always set to ",(0,r.jsx)(t.code,{children:"True"}),"."]})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"outputs-6",children:"Outputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Display Name"}),(0,r.jsx)(t.th,{children:"Info"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"structured_output"}),(0,r.jsx)(t.td,{children:"Structured Output"}),(0,r.jsx)(t.td,{children:"The structured output is a Data object based on the defined schema."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"structured_output_dataframe"}),(0,r.jsx)(t.td,{children:"DataFrame"}),(0,r.jsxs)(t.td,{children:["The structured output converted to a ",(0,r.jsx)(t.a,{href:"/concepts-objects#dataframe-object",children:"DataFrame"})," format."]})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},72654:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/astra_db_chat_memory_rounded-9746ca2bb69d3b07ac0a071f4b9471b3.png"},82798:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/component-structured-output-7bb5a996464cb83d4c94a893419bb176.png"}}]);