interface ITask {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
    task0: {
        answer: string[];
        table: string;
        view: string;
    },
    task1: {
        answer: string;
        table: string;
        view: string;
    },
    task2: {
        answer: string;
        table: string;
        view: string;
    },
    task3: {
        answer: string[];
        table: string;
        view: string;
    },
    task4: {
        answer: string;
        table: string;
        view: string;
    },
    task5: {
        answer: string;
        table: string;
        view: string;
    }
}

export const task: ITask = {
    "task0": {
        "answer": ["plate", "*"],
        "table": `<plate class="table__plate plate code-highlighting animation-b"></plate>
                  <plate class="table__plate plate code-highlighting animation-b"></plate>`,
        "view": '<div class="code-highlighting">  &lt;plate/&gt;</div><div class="code-highlighting">  &lt;plate/&gt;</div>',

    },
    "task1": {
        "answer": "apple",
        "table": `<plate class="table__plate code-highlighting"></plate>
                  <plate class="table__plate code-highlighting">
                    <apple class="table__apple code-highlighting animation-b"></apple>
                  </plate>`,
        "view": `<div class="code-highlighting">  &lt;plate/&gt;</div><div class="code-highlighting">  &lt;plate&gt;</div><div class="code-highlighting">    &lt;apple/&gt;  </div><div class="code-highlighting">  &lt;plate/&gt;</div>`,

    },
    "task2": {
        "answer": "banana",
        "table": `<plate class="table__plate code-highlighting"></plate>
                  <plate class="table__plate code-highlighting">
                    <banana class="table__banana code-highlighting animation-b"></banana>
                  </plate>
                  <banana class="table__banana code-highlighting animation-b"></banana>`,
                 
        "view": `<div class="code-highlighting">  &lt;plate/&gt;</div><div class="code-highlighting">  &lt;plate&gt;</div><div class="code-highlighting">    &lt;banana/&gt;  </div><div class="code-highlighting">  &lt;plate/&gt;</div><div class="code-highlighting">  &lt;banana/&gt;</div>`,

    },
    "task3": {
        "answer": [".banana, #appleBig", "#appleBig, .banana"],
        "table": `
                  <banana class="table__banana  code-highlighting animation-b"></banana>
                  <plate class="table__plate code-highlighting">
                    <apple class="table__apple table__apple--big code-highlighting animation-b"></apple>
                  </plate>
                  <plate class="table__plate code-highlighting">
                    <banana class="table__banana table__banana--big code-highlighting "></banana>
                  </plate>
                  <apple class="table__apple code-highlighting"></apple>`,
                 
        "view": 
        
        `<div class="code-highlighting">  &lt;banana class="banana"/&gt;</div>
        <div class="code-highlighting">  &lt;plate&gt;</div><div class="code-highlighting">    &lt;apple id="appleBig" /&gt;  </div>
        <div class="code-highlighting">  &lt;plate/&gt;</div>
        <div class="code-highlighting">  &lt;banana id= "banana-big"/&gt;</div>
        <div class="code-highlighting">  &lt;plate&gt;</div> 
        <div class="code-highlighting">  &lt;apple class="apple"/&gt;</div>`,

    },
    "task4": {
        "answer": ".small",
        "table": `
                  <bento class=" table__bento code-highlighting ">
                    <lemon class="table__lemon code-highlighting animation-b"></lemon>
                  </bento>
                  
                  <plate class="table__plate code-highlighting">
                    <apple class="table__apple code-highlighting animation-b"></apple>
                  </plate>
                  <apple class="table__apple table__apple--big code-highlighting">
                    <lemon class="table__lemon code-highlighting animation-b"></lemon>
                  </apple>
                  <apple class="table__apple table__apple--big code-highlighting "></apple>`,
                 
        "view": `
        <div class="code-highlighting">  &lt;bento&gt;</div><div class="code-highlighting">    &lt;limon class="small"/&gt;</div> <div class="code-highlighting">  &lt;bento/&gt;</div>
        
        <div class="code-highlighting">  &lt;plate"&gt;</div><div class="code-highlighting">    &lt;apple class="small"/&gt;  </div><div class="code-highlighting">  &lt;plate/&gt;</div>
        <div class="code-highlighting">  &lt;apple class="big&gt;</div><div class="code-highlighting">    &lt;apple class="small"/&gt;  </div><div class="code-highlighting">  &lt;apple"/&gt;</div>
        <div class="code-highlighting">  &lt;apple class="big"/&gt;</div>`,

    },
    "task5": {
        "answer": "bento",
        "table": `
                  <bento class=" table__bento code-highlighting ">
                    <plate class="table__plate code-highlighting animation-b"></plate>
                  </bento>
                  
                  <plate class="table__plate code-highlighting"></plate>
                  <bento class=" table__bento code-highlighting ">
                    <lemon class="table__lemon code-highlighting animation-b"></lemon>
                  </bento>
                  <apple class="table__apple table__apple--big code-highlighting "></apple>
                  <plate class="table__plate code-highlighting">
                    <lemon class="table__lemon code-highlighting "></lemon>
                  </plate>`,
                 
        "view": `
        <div class="code-highlighting">  &lt;bento&gt;</div><div class="code-highlighting">    &lt;plate"/&gt;</div> <div class="code-highlighting">  &lt;bento/&gt;</div>
        <div class="code-highlighting">  &lt;plate"&gt;</div><div class="code-highlighting">  &lt;plate/&gt;</div>
        <div class="code-highlighting">  &lt;bento&gt;</div><div class="code-highlighting">    &lt;lemon class="small"/&gt;</div> <div class="code-highlighting">  &lt;bento/&gt;</div>
        <div class="code-highlighting">  &lt;apple class="big"/&gt;</div>
        <div class="code-highlighting">  &lt;plate class="big&gt;</div><div class="code-highlighting">    &lt;limon class="small"/&gt;  </div><div class="code-highlighting">  &lt;plate"/&gt;</div>
        `,

    },
    "task6": {
        "answer": "bento",
        "table": `
                  <bento class=" table__bento code-highlighting ">
                    <plate class="table__plate code-highlighting animation-b">
                        <apple class="table__apple table__apple--big code-highlighting "></apple>
                    </plate>
                  </bento>
                  
                  <plate class="table__plate code-highlighting"></plate>
                  <plate class="table__plate code-highlighting">
                    <apple class="table__apple table__apple code-highlighting "></apple>
                  </plate>
                  <bento class=" table__bento code-highlighting ">
                    <lemon class="table__lemon code-highlighting animation-b"></lemon>
                  </bento>
                  <apple class="table__apple table__apple--big code-highlighting "></apple>
                  <plate class="table__plate code-highlighting">
                    <apple class="table__apple table__apple code-highlighting "></apple>
                  </plate>`,
                 
        "view": `
        <div class="code-highlighting">  &lt;bento&gt;</div><div class="code-highlighting">    &lt;plate"/&gt;</div> <div class="code-highlighting">  &lt;bento/&gt;</div>
        <div class="code-highlighting">  &lt;plate"&gt;</div><div class="code-highlighting">  &lt;plate/&gt;</div>
        <div class="code-highlighting">  &lt;bento&gt;</div><div class="code-highlighting">    &lt;lemon class="small"/&gt;</div> <div class="code-highlighting">  &lt;bento/&gt;</div>
        <div class="code-highlighting">  &lt;apple class="big"/&gt;</div>
        <div class="code-highlighting">  &lt;plate class="big&gt;</div><div class="code-highlighting">    &lt;limon class="small"/&gt;  </div><div class="code-highlighting">  &lt;plate"/&gt;</div>
        `,

    }
};