import{m as P,p as M}from"./main-MOTCU2CE.js";import{Ar as I,Bt as bze,Ci as UO,G as Nf,Hr as Lk,It as bae,Lr as Kg,Oi as VO,Or as HO,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Sa as j_,Ti as U_,Tr as Gb,Ui as YO,Va as p,W as Mze,Zi as ar,ar as An,ci as QP,cr as B_,da as gk,gi as Rb,io as vu,ji as Vk,jn as ste,ki as V_,li as Qc,na as de$1,oo as wg,or as B,ro as vt,sa as ek,ua as ge,vi as Sk,w as Fc,wr as GV,xr as FO}from"./chunk-DtUf9FxZ.js";var ee=(()=>{class o{widget={title:`Arraste-me`,body:`Este widget pode ser arrastado livremente.`};static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drag-basic`]],standalone:!1,decls:4,vars:1,consts:[[1,`po-row`],[`p-title`,`Arraste-me`,1,`po-md-4`,3,`p-drag`],[1,`po-font-text`]],template:function(n,p){n&1&&(Qc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2),Sk(3,`Este widget pode ser arrastado livremente. Segure o handle e mova-o.`),Kg()()()),n&2&&(wg(),Rb(`p-drag`,p.widget))},dependencies:[bae,bze],encapsulation:2})}return o})();var ce=o=>({"docs-sample-code-tabs":o});var te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drag-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-drag-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-drag-basic/sample-po-drag-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-drag-basic/sample-po-drag-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,p){n&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Drag Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return p.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-drag-basic/sample-po-drag-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
  <po-widget class="po-md-4" [p-drag]="widget" p-title="Arraste-me">
    <div class="po-font-text">Este widget pode ser arrastado livremente. Segure o handle e mova-o.</div>
  </po-widget>
</div>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-drag-basic/sample-po-drag-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-drag-basic',
  templateUrl: './sample-po-drag-basic.component.html',
  standalone: false
})
export class SamplePoDragBasicComponent {
  widget = { title: 'Arraste-me', body: 'Este widget pode ser arrastado livremente.' };
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-drag-basic`),Kg(),vu(25,`hr`)),n&2&&(wg(5),gk(`po-icon `+p.sampleCodeButtonIcon),wg(),tm(` `,p.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ce,p.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ee],encapsulation:2,changeDetection:1})}return o})();var ue=()=>[`list-doing`,`list-done`];var ve=()=>[`list-todo`,`list-done`];var he=()=>[`list-todo`,`list-doing`];var R=(o,c)=>c.id;function fe(o,c){if(o&1&&vu(0,`po-widget`,4),o&2){let a=c.$implicit,n=ek();Rb(`p-drag`,a)(`p-title`,n.tasksWidgets()[a.id]?.title)}}function be(o,c){if(o&1&&vu(0,`po-widget`,7),o&2){let a=c.$implicit,n=ek();Rb(`p-drag`,a)(`p-title`,n.tasksWidgets()[a.id]?.title)}}function Ce(o,c){if(o&1&&vu(0,`po-widget`,10),o&2){let a=c.$implicit,n=ek();Rb(`p-drag`,a)(`p-title`,n.tasksWidgets()[a.id]?.title)}}var ie=(()=>{class o{todoList=B([{id:`t1`},{id:`t2`},{id:`t3`}]);doingList=B([{id:`d1`},{id:`d2`}]);doneList=B([{id:`f1`}]);tasksWidgets=B({t1:{title:`Criar wireframes`},t2:{title:`Definir contrato da API`},t3:{title:`Escrever testes unitários`},d1:{title:`Implementar tela de login`},d2:{title:`Configurar CI/CD`},f1:{title:`Kickoff do projeto`}});listMap={"list-todo":`todo`,"list-doing":`doing`,"list-done":`done`};onDropped(a,n){if(this.setList(n,a.items),a.previousContainer){let p=this.listMap[a.previousContainer];p&&this.setList(p,this.getList(p).filter(g=>g.id!==a.item.id))}}getList(a){switch(a){case`todo`:return this.todoList();case`doing`:return this.doingList();case`done`:return this.doneList()}}setList(a,n){switch(a){case`todo`:this.todoList.set(n);break;case`doing`:this.doingList.set(n);break;case`done`:this.doneList.set(n)}}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drop-list-vertical`]],standalone:!1,decls:16,vars:12,consts:[[1,`po-row`],[1,`po-md-4`,3,`p-height`],[`p-label`,`A Fazer`],[`p-drop-list-id`,`list-todo`,1,`po-row`,2,`min-height`,`100px`,3,`p-dropped`,`p-drop-list`,`p-drop-list-connected-to`],[`p-tag`,`A Fazer`,`p-tag-type`,`warning`,1,`po-md-12`,`po-mb-2`,3,`p-drag`,`p-title`],[`p-label`,`Em Andamento`],[`p-drop-list-id`,`list-doing`,1,`po-row`,2,`min-height`,`100px`,3,`p-dropped`,`p-drop-list`,`p-drop-list-connected-to`],[`p-tag`,`Em Andamento`,`p-tag-type`,`info`,1,`po-md-12`,`po-mb-2`,3,`p-drag`,`p-title`],[`p-label`,`Concluído`],[`p-drop-list-id`,`list-done`,`p-drop-list-disabled`,``,1,`po-row`,2,`min-height`,`100px`,3,`p-dropped`,`p-drop-list`,`p-drop-list-connected-to`],[`p-tag`,`Concluído`,`p-tag-type`,`success`,1,`po-md-12`,`po-mb-2`,3,`p-drag`,`p-title`]],template:function(n,p){n&1&&(Qc(0,`div`,0)(1,`po-container`,1),vu(2,`po-divider`,2),Qc(3,`div`,3),vt(`p-dropped`,function(D){return p.onDropped(D,`todo`)}),UO(4,fe,1,2,`po-widget`,4,R),Kg()(),Qc(6,`po-container`,1),vu(7,`po-divider`,5),Qc(8,`div`,6),vt(`p-dropped`,function(D){return p.onDropped(D,`doing`)}),UO(9,be,1,2,`po-widget`,7,R),Kg()(),Qc(11,`po-container`,1),vu(12,`po-divider`,8),Qc(13,`div`,9),vt(`p-dropped`,function(D){return p.onDropped(D,`done`)}),UO(14,Ce,1,2,`po-widget`,10,R),Kg()()()),n&2&&(wg(),Rb(`p-height`,500),wg(2),Rb(`p-drop-list`,p.todoList())(`p-drop-list-connected-to`,Lk(9,ue)),wg(),HO(p.todoList()),wg(2),Rb(`p-height`,500),wg(2),Rb(`p-drop-list`,p.doingList())(`p-drop-list-connected-to`,Lk(10,ve)),wg(),HO(p.doingList()),wg(2),Rb(`p-height`,500),wg(2),Rb(`p-drop-list`,p.doneList())(`p-drop-list-connected-to`,Lk(11,he)),wg(),HO(p.doneList()))},dependencies:[Fc,Nf,bae,bze,ste],encapsulation:2})}return o})();var Se=o=>({"docs-sample-code-tabs":o});var oe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drop-list-vertical-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-drop-list-vertical`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-drop-list-vertical/sample-po-drop-list-vertical.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-drop-list-vertical/sample-po-drop-list-vertical.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,p){n&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Drop List - Vertical (Kanban)`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return p.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-drop-list-vertical/sample-po-drop-list-vertical.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
  <po-container class="po-md-4" [p-height]="500">
    <po-divider p-label="A Fazer"></po-divider>

    <div
      class="po-row"
      style="min-height: 100px"
      [p-drop-list]="todoList()"
      p-drop-list-id="list-todo"
      [p-drop-list-connected-to]="['list-doing', 'list-done']"
      (p-dropped)="onDropped($event, 'todo')"
    >
      @for (task of todoList(); track task.id) {
        <po-widget
          class="po-md-12 po-mb-2"
          [p-drag]="task"
          [p-title]="tasksWidgets()[task.id]?.title"
          p-tag="A Fazer"
          p-tag-type="warning"
        >
        </po-widget>
      }
    </div>
  </po-container>

  <po-container class="po-md-4" [p-height]="500">
    <po-divider p-label="Em Andamento"></po-divider>

    <div
      class="po-row"
      style="min-height: 100px"
      [p-drop-list]="doingList()"
      p-drop-list-id="list-doing"
      [p-drop-list-connected-to]="['list-todo', 'list-done']"
      (p-dropped)="onDropped($event, 'doing')"
    >
      @for (task of doingList(); track task.id) {
        <po-widget
          class="po-md-12 po-mb-2"
          [p-drag]="task"
          [p-title]="tasksWidgets()[task.id]?.title"
          p-tag="Em Andamento"
          p-tag-type="info"
        >
        </po-widget>
      }
    </div>
  </po-container>

  <po-container class="po-md-4" [p-height]="500">
    <po-divider p-label="Conclu\xEDdo"></po-divider>

    <div
      class="po-row"
      style="min-height: 100px"
      [p-drop-list]="doneList()"
      p-drop-list-id="list-done"
      [p-drop-list-connected-to]="['list-todo', 'list-doing']"
      (p-dropped)="onDropped($event, 'done')"
      p-drop-list-disabled
    >
      @for (task of doneList(); track task.id) {
        <po-widget
          class="po-md-12 po-mb-2"
          [p-drag]="task"
          [p-title]="tasksWidgets()[task.id]?.title"
          p-tag="Conclu\xEDdo"
          p-tag-type="success"
        >
        </po-widget>
      }
    </div>
  </po-container>
</div>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-drop-list-vertical/sample-po-drop-list-vertical.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, signal } from '@angular/core';

import { PoDraggableItem, PoDropEvent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-drop-list-vertical',
  templateUrl: './sample-po-drop-list-vertical.component.html',
  standalone: false
})
export class SamplePoDropListVerticalComponent {
  todoList = signal<Array<PoDraggableItem>>([{ id: 't1' }, { id: 't2' }, { id: 't3' }]);

  doingList = signal<Array<PoDraggableItem>>([{ id: 'd1' }, { id: 'd2' }]);

  doneList = signal<Array<PoDraggableItem>>([{ id: 'f1' }]);

  tasksWidgets = signal<Record<string, { title: string }>>({
    t1: { title: 'Criar wireframes' },
    t2: { title: 'Definir contrato da API' },
    t3: { title: 'Escrever testes unit\xE1rios' },
    d1: { title: 'Implementar tela de login' },
    d2: { title: 'Configurar CI/CD' },
    f1: { title: 'Kickoff do projeto' }
  });

  private readonly listMap: Record<string, 'todo' | 'doing' | 'done'> = {
    'list-todo': 'todo',
    'list-doing': 'doing',
    'list-done': 'done'
  };

  onDropped(event: PoDropEvent, list: 'todo' | 'doing' | 'done'): void {
    this.setList(list, event.items);

    if (event.previousContainer) {
      const sourceList = this.listMap[event.previousContainer];
      if (sourceList) {
        this.setList(
          sourceList,
          this.getList(sourceList).filter(item => item.id !== event.item.id)
        );
      }
    }
  }

  private getList(list: 'todo' | 'doing' | 'done'): Array<PoDraggableItem> {
    switch (list) {
      case 'todo':
        return this.todoList();
      case 'doing':
        return this.doingList();
      case 'done':
        return this.doneList();
    }
  }

  private setList(list: 'todo' | 'doing' | 'done', items: Array<PoDraggableItem>): void {
    switch (list) {
      case 'todo':
        this.todoList.set(items);
        break;
      case 'doing':
        this.doingList.set(items);
        break;
      case 'done':
        this.doneList.set(items);
        break;
    }
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-drop-list-vertical`),Kg(),vu(25,`hr`)),n&2&&(wg(5),gk(`po-icon `+p.sampleCodeButtonIcon),wg(),tm(` `,p.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Se,p.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ie],encapsulation:2,changeDetection:1})}return o})();var xe=(o,c)=>c.id;function Pe(o,c){if(o&1&&(Qc(0,`po-widget`,4)(1,`p`),Sk(2),Kg()()),o&2){let a=c.$implicit,n=ek();Rb(`p-drag`,a)(`p-title`,n.stepsWidgets()[a.id]?.title),wg(2),Gb(n.stepsWidgets()[a.id]?.title)}}var ne=(()=>{class o{steps=B([{id:`s1`},{id:`s2`},{id:`s3`},{id:`s4`}]);stepsWidgets=B({s1:{title:`Requisitos`},s2:{title:`Design`},s3:{title:`Desenvolvimento`},s4:{title:`Testes`}});onDropped(a){this.steps.set(a.items)}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drop-list-horizontal`]],standalone:!1,decls:7,vars:1,consts:[[`p-title`,`Pipeline — Orientação Horizontal`],[1,`po-font-text`,`po-mb-3`],[1,`po-row`],[`p-drop-list-id`,`list-horizontal`,`p-drop-list-orientation`,`horizontal`,1,`po-md-12`,3,`p-dropped`,`p-drop-list`],[`p-tag-type`,`info`,1,`po-md-3`,`po-mb-2`,3,`p-drag`,`p-title`]],template:function(n,p){n&1&&(Qc(0,`po-container`,0)(1,`p`,1),Sk(2,` Arraste as etapas para reordenar o pipeline. Os itens ficam lado a lado e a troca é detectada pelo eixo X. `),Kg(),Qc(3,`div`,2)(4,`div`,3),vt(`p-dropped`,function(D){return p.onDropped(D)}),UO(5,Pe,3,3,`po-widget`,4,xe),Kg()()()),n&2&&(wg(4),Rb(`p-drop-list`,p.steps()),wg(),HO(p.steps()))},dependencies:[Fc,bae,bze,ste],encapsulation:2})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drop-list-horizontal-view`]],standalone:!1,decls:32,vars:6,consts:[[`id`,`sample-po-drop-list-horizontal`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-drop-list-horizontal/sample-po-drop-list-horizontal.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-drop-list-horizontal/sample-po-drop-list-horizontal.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,p){n&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Drop List - Horizontal (Pipeline)`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return p.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-drop-list-horizontal/sample-po-drop-list-horizontal.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-container p-title="Pipeline \u2014 Orienta\xE7\xE3o Horizontal">
  <p class="po-font-text po-mb-3">
    Arraste as etapas para reordenar o pipeline. Os itens ficam lado a lado e a troca \xE9 detectada pelo eixo X.
  </p>

  <div class="po-row">
    <div
      class="po-md-12"
      [p-drop-list]="steps()"
      p-drop-list-id="list-horizontal"
      p-drop-list-orientation="horizontal"
      (p-dropped)="onDropped($event)"
    >
      @for (step of steps(); track step.id) {
        <po-widget class="po-md-3 po-mb-2" [p-drag]="step" [p-title]="stepsWidgets()[step.id]?.title" p-tag-type="info">
          <p>`),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` stepsWidgets()[step.id]?.title `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`</p>
        </po-widget>
      }
    </div>
  </div>
</po-container>
`),Kg()()()(),Qc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Sk(25,`sample-po-drop-list-horizontal/sample-po-drop-list-horizontal.component.ts`),Kg(),Qc(26,`div`,10)(27,`pre`,11),Sk(28,`import { Component, signal } from '@angular/core';
import { PoDraggableItem, PoDropEvent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-drop-list-horizontal',
  templateUrl: './sample-po-drop-list-horizontal.component.html',
  standalone: false
})
export class SamplePoDropListHorizontalComponent {
  steps = signal<Array<PoDraggableItem>>([{ id: 's1' }, { id: 's2' }, { id: 's3' }, { id: 's4' }]);

  stepsWidgets = signal<Record<string, { title: string }>>({
    s1: { title: 'Requisitos' },
    s2: { title: 'Design' },
    s3: { title: 'Desenvolvimento' },
    s4: { title: 'Testes' }
  });

  onDropped(event: PoDropEvent): void {
    this.steps.set(event.items);
  }
}
`),Kg()()()()()(),Qc(29,`div`,12),vu(30,`sample-po-drop-list-horizontal`),Kg(),vu(31,`hr`)),n&2&&(wg(5),gk(`po-icon `+p.sampleCodeButtonIcon),wg(),tm(` `,p.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ye,p.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ne],encapsulation:2,changeDetection:1})}return o})();var _e=(o,c)=>c.id;function Te(o,c){if(o&1&&(Qc(0,`po-widget`,4)(1,`p`),Sk(2),Kg()()),o&2){let a=c.$implicit,n=ek();Rb(`p-drag`,a)(`p-title`,n.cardsWidgets()[a.id]?.title),wg(2),Gb(n.cardsWidgets()[a.id]?.title)}}var pe=(()=>{class o{cards=B([{id:`c1`},{id:`c2`},{id:`c3`},{id:`c4`},{id:`c5`},{id:`c6`}]);cardsWidgets=B({c1:{title:`Faturamento`},c2:{title:`Estoque`},c3:{title:`Compras`},c4:{title:`RH`},c5:{title:`Fiscal`},c6:{title:`Financeiro`}});onDropped(a){this.cards.set(a.items)}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drop-list-mixed`]],standalone:!1,decls:7,vars:1,consts:[[`p-title`,`Dashboard — Orientação Mixed`],[1,`po-font-text`,`po-mb-3`],[1,`po-row`],[`p-drop-list-id`,`list-mixed`,`p-drop-list-orientation`,`mixed`,1,`po-md-12`,3,`p-dropped`,`p-drop-list`],[`p-tag-type`,`neutral`,1,`po-md-4`,`po-mb-2`,3,`p-drag`,`p-title`]],template:function(n,p){n&1&&(Qc(0,`po-container`,0)(1,`p`,1),Sk(2,` Arraste os cards para reorganizar o layout do dashboard. A orientação mixed detecta trocas nos eixos X e Y, ideal para layouts em grid onde os itens quebram em múltiplas linhas. `),Kg(),Qc(3,`div`,2)(4,`div`,3),vt(`p-dropped`,function(D){return p.onDropped(D)}),UO(5,Te,3,3,`po-widget`,4,_e),Kg()()()),n&2&&(wg(4),Rb(`p-drop-list`,p.cards()),wg(),HO(p.cards()))},dependencies:[Fc,bae,bze,ste],encapsulation:2})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var re=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drop-list-mixed-view`]],standalone:!1,decls:32,vars:6,consts:[[`id`,`sample-po-drop-list-mixed`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-drop-list-mixed/sample-po-drop-list-mixed.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-drop-list-mixed/sample-po-drop-list-mixed.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,p){n&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Drop List - Mixed (Dashboard)`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return p.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-drop-list-mixed/sample-po-drop-list-mixed.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-container p-title="Dashboard \u2014 Orienta\xE7\xE3o Mixed">
  <p class="po-font-text po-mb-3">
    Arraste os cards para reorganizar o layout do dashboard. A orienta\xE7\xE3o mixed detecta trocas nos eixos X e Y, ideal
    para layouts em grid onde os itens quebram em m\xFAltiplas linhas.
  </p>

  <div class="po-row">
    <div
      class="po-md-12"
      [p-drop-list]="cards()"
      p-drop-list-id="list-mixed"
      p-drop-list-orientation="mixed"
      (p-dropped)="onDropped($event)"
    >
      @for (card of cards(); track card.id) {
        <po-widget
          class="po-md-4 po-mb-2"
          [p-drag]="card"
          [p-title]="cardsWidgets()[card.id]?.title"
          p-tag-type="neutral"
        >
          <p>`),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` cardsWidgets()[card.id]?.title `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`</p>
        </po-widget>
      }
    </div>
  </div>
</po-container>
`),Kg()()()(),Qc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Sk(25,`sample-po-drop-list-mixed/sample-po-drop-list-mixed.component.ts`),Kg(),Qc(26,`div`,10)(27,`pre`,11),Sk(28,`import { Component, signal } from '@angular/core';
import { PoDraggableItem, PoDropEvent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-drop-list-mixed',
  templateUrl: './sample-po-drop-list-mixed.component.html',
  standalone: false
})
export class SamplePoDropListMixedComponent {
  cards = signal<Array<PoDraggableItem>>([
    { id: 'c1' },
    { id: 'c2' },
    { id: 'c3' },
    { id: 'c4' },
    { id: 'c5' },
    { id: 'c6' }
  ]);

  cardsWidgets = signal<Record<string, { title: string }>>({
    c1: { title: 'Faturamento' },
    c2: { title: 'Estoque' },
    c3: { title: 'Compras' },
    c4: { title: 'RH' },
    c5: { title: 'Fiscal' },
    c6: { title: 'Financeiro' }
  });

  onDropped(event: PoDropEvent): void {
    this.cards.set(event.items);
  }
}
`),Kg()()()()()(),Qc(29,`div`,12),vu(30,`sample-po-drop-list-mixed`),Kg(),vu(31,`hr`)),n&2&&(wg(5),gk(`po-icon `+p.sampleCodeButtonIcon),wg(),tm(` `,p.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Me,p.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,pe],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{router=p(An);openDoc(a){this.router.navigate([`/documentation`,a],{queryParams:{view:`doc`}})}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drag-doc`]],standalone:!1,decls:226,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-drag-directive`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-drag`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoDraggableItem`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-drag-disabled`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`event-p-drag-ended`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`event-p-drag-moved`,1,`docs-api-properties-row`],[`id`,`event-p-drag-started`,1,`docs-api-properties-row`],[`id`,`interface-po-draggable-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-draggable-item-data`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any`],[`id`,`interface-po-draggable-item-id`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(n,p){n&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoDragDropModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo que exporta as diretivas de drag & drop do PO UI:`),Kg(),Qc(7,`ul`)(8,`li`)(9,`code`),Sk(10,`PoDropListDirective`),Kg(),Sk(11,` (`),Qc(12,`code`),Sk(13,`p-drop-list`),Kg(),Sk(14,`) — define um container de drop.`),Kg(),Qc(15,`li`)(16,`code`),Sk(17,`PoDragDirective`),Kg(),Sk(18,` (`),Qc(19,`code`),Sk(20,`p-drag`),Kg(),Sk(21,`) — torna um elemento arrastável.`),Kg()()(),Qc(22,`h3`,3),Sk(23,`Componente`),Kg(),Qc(24,`h4`,4)(25,`code`,5),Sk(26,`PoDragDirective`),Kg()(),Qc(27,`div`,2)(28,`p`),Sk(29,` A diretiva `),Qc(30,`code`),Sk(31,`p-drag`),Kg(),Sk(32,` torna um elemento arrastável, encapsulando o `),Qc(33,`code`),Sk(34,`CdkDrag`),Kg(),Sk(35,` do Angular CDK.`),Kg(),Qc(36,`p`),Sk(37,`Ela pode ser usada em conjunto com a diretiva `),Qc(38,`code`),Sk(39,`p-drop-list`),Kg(),Sk(40,`. O valor atribuído ao seletor (`),Qc(41,`code`),Sk(42,`p-drag`),Kg(),Sk(43,`)
corresponde ao dado do item, que \xE9 emitido nos eventos de drag.`),Kg(),Qc(44,`blockquote`)(45,`p`),Sk(46,`Atualmente validada com o componente `),Qc(47,`code`),Sk(48,`po-widget`),Kg(),Sk(49,`. O suporte a outros componentes
PO UI ser\xE1 avaliado em vers\xF5es futuras.`),Kg()()(),Qc(50,`div`,6)(51,`h4`,7),Sk(52,`Seletor`),Kg(),Qc(53,`pre`,8),Sk(54,`<[p-drag]
    p-drag="PoDraggableItem"
    p-drag-disabled="boolean"
    (p-drag-ended)="EventEmitter"
    (p-drag-moved)="EventEmitter"
    (p-drag-started)="EventEmitter" >
</[p-drag]>
`),Kg()(),Qc(55,`h4`,9),Sk(56,`Propriedades`),Kg(),Qc(57,`table`,10)(58,`tr`,11)(59,`th`,12),Sk(60,`Nome`),Kg(),Qc(61,`th`,12),Sk(62,`Tipo`),Kg(),Qc(63,`th`,12),Sk(64,`Padrão`),Kg(),Qc(65,`th`,12),Sk(66,`Descrição`),Kg()(),Qc(67,`tr`,13)(68,`td`,14)(69,`div`,15)(70,`span`,16),Sk(71,` p-drag`),vu(72,`br`),Kg()()(),Qc(73,`td`,17)(74,`code`,18),Sk(75,`PoDraggableItem`),Kg()(),Qc(76,`td`,19),Sk(77,`-`),Kg(),Qc(78,`td`,20)(79,`p`),Sk(80,`Dado associado ao item arrast\xE1vel. O valor \xE9 emitido nos eventos
`),Qc(81,`code`),Sk(82,`p-drag-started`),Kg(),Sk(83,` e `),Qc(84,`code`),Sk(85,`p-drag-ended`),Kg(),Sk(86,`.`),Kg()()(),Qc(87,`tr`,21)(88,`td`,14)(89,`div`,15)(90,`span`,16),Sk(91,` p-drag-disabled`),vu(92,`br`),Kg()()(),Qc(93,`td`,17)(94,`code`,22),Sk(95,`boolean`),Kg()(),Qc(96,`td`,19)(97,`p`),Sk(98,`false`),Kg()(),Qc(99,`td`,20)(100,`em`)(101,`strong`),Sk(102,`(opcional)`),Kg()(),Qc(103,`p`),Sk(104,`Desabilita o arraste do item. Quando `),Qc(105,`code`),Sk(106,`true`),Kg(),Sk(107,`, o usu\xE1rio n\xE3o pode iniciar
um gesto de arrastar neste elemento, mas o item continua participando do
c\xE1lculo de posi\xE7\xF5es dos vizinhos dentro do `),Qc(108,`code`),Sk(109,`p-drop-list`),Kg(),Sk(110,`.`),Kg()()(),Qc(111,`tr`,23)(112,`td`,14)(113,`div`,24)(114,`span`,25),Sk(115,` (p-drag-ended)`),vu(116,`br`),Kg()()(),Qc(117,`td`,17)(118,`code`,26),Sk(119,`EventEmitter`),Kg()(),Qc(120,`td`,19),Sk(121,`-`),Kg(),Qc(122,`td`,20)(123,`em`)(124,`strong`),Sk(125,`(opcional)`),Kg()(),Qc(126,`p`),Sk(127,`Evento emitido quando o arraste do item \xE9 encerrado.
O valor emitido \xE9 o dado associado ao item (propriedade `),Qc(128,`code`),Sk(129,`p-drag`),Kg(),Sk(130,`).`),Kg()()(),Qc(131,`tr`,27)(132,`td`,14)(133,`div`,24)(134,`span`,25),Sk(135,` (p-drag-moved)`),vu(136,`br`),Kg()()(),Qc(137,`td`,17)(138,`code`,26),Sk(139,`EventEmitter`),Kg()(),Qc(140,`td`,19),Sk(141,`-`),Kg(),Qc(142,`td`,20)(143,`em`)(144,`strong`),Sk(145,`(opcional)`),Kg()(),Qc(146,`p`),Sk(147,`Evento emitido continuamente enquanto o item est\xE1 sendo arrastado.
Cont\xE9m a posi\xE7\xE3o do ponteiro, a dist\xE2ncia percorrida e a dire\xE7\xE3o do movimento.`),Kg(),Qc(148,`blockquote`)(149,`p`)(150,`strong`),Sk(151,`Atenção:`),Kg(),Sk(152,` Este evento \xE9 disparado em alta frequ\xEAncia (a cada frame de movimento).
Evite opera\xE7\xF5es custosas no handler ou aplique t\xE9cnicas de throttle/debounce.`),Kg()()()(),Qc(153,`tr`,28)(154,`td`,14)(155,`div`,24)(156,`span`,25),Sk(157,` (p-drag-started)`),vu(158,`br`),Kg()()(),Qc(159,`td`,17)(160,`code`,26),Sk(161,`EventEmitter`),Kg()(),Qc(162,`td`,19),Sk(163,`-`),Kg(),Qc(164,`td`,20)(165,`em`)(166,`strong`),Sk(167,`(opcional)`),Kg()(),Qc(168,`p`),Sk(169,`Evento emitido quando o arraste do item \xE9 iniciado.
O valor emitido \xE9 o dado associado ao item (propriedade `),Qc(170,`code`),Sk(171,`p-drag`),Kg(),Sk(172,`).`),Kg()()()(),Qc(173,`h3`),Sk(174,`Interfaces`),Kg(),Qc(175,`h4`,29)(176,`code`,5),Sk(177,`PoDraggableItem`),Kg()(),Qc(178,`div`,2)(179,`p`),Sk(180,`Define a estrutura de um item arrast\xE1vel gen\xE9rico utilizado pelas diretivas
`),Qc(181,`code`),Sk(182,`PoDropListDirective`),Kg(),Sk(183,` e `),Qc(184,`code`),Sk(185,`PoDragDirective`),Kg(),Sk(186,`.`),Kg(),Qc(187,`p`),Sk(188,`A interface \xE9 intencionalmente leve \u2014 cont\xE9m apenas os campos essenciais para
qualquer componente arrast\xE1vel.`),Kg()(),Qc(189,`h4`,9),Sk(190,`Propriedades`),Kg(),Qc(191,`table`,10)(192,`tr`,11)(193,`th`,12),Sk(194,`Nome`),Kg(),Qc(195,`th`,12),Sk(196,`Tipo`),Kg(),Qc(197,`th`,12),Sk(198,`Descrição`),Kg()(),Qc(199,`tr`,30)(200,`td`,14)(201,`div`,15)(202,`span`,16),Sk(203,` data`),vu(204,`br`),Kg()()(),Qc(205,`td`,17)(206,`code`,31),Sk(207,`any`),Kg()(),Qc(208,`td`,20)(209,`em`)(210,`strong`),Sk(211,`(opcional)`),Kg()(),Qc(212,`p`),Sk(213,`Dados arbitr\xE1rios do consumidor. \xDAtil para associar informa\xE7\xF5es extras
ao item sem estender a interface.`),Kg()()(),Qc(214,`tr`,32)(215,`td`,14)(216,`div`,15)(217,`span`,16),Sk(218,` id`),vu(219,`br`),Kg()()(),Qc(220,`td`,17)(221,`code`,33),Sk(222,`string`),Kg()(),Qc(223,`td`,20)(224,`p`),Sk(225,`Identificador único do item.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Be(o,c){if(o&1){let a=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(a);let p=ek();return U_(p.changeTab(`web`))}),vu(1,`sample-po-drag-basic-view`)(2,`sample-po-drop-list-vertical-view`)(3,`sample-po-drop-list-horizontal-view`)(4,`sample-po-drop-list-mixed-view`),Kg()}if(o&2){let a=ek();Rb(`p-active`,a.activeTab===`web`)}}var Fe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:n||`web`})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Drag`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(n,p){n&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Be,5,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return p.changeTab(`doc`)}),vu(4,`sample-po-drag-doc`),Kg()()()),n&2&&(Rb(`p-actions`,p.actions),wg(2),VO(p.hidePoWebSample?-1:2),wg(),Rb(`p-active`,p.activeTab===`doc`))},dependencies:[Mze,tre,are,te,oe,ae,re,de],encapsulation:2,changeDetection:1})}return o})()}];var le=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=ge({type:o});static ɵinj=de$1({imports:[GV.forChild(Fe),GV]})}return o})();var Ct=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=ge({type:o});static ɵinj=de$1({imports:[M,le]})}return o})();export{Ct as DocPoDragModule};