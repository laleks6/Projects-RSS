interface ITask {
    [x: string]: any;
    task0: {
        answer: string;
        table: string;
        view: string;
    },
    task1: {
        answer: string;
        table: string;
        view: string;
    }
}

export const task: ITask = {
    "task0": {
        "answer": "plate",
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

    }
};