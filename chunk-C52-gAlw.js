import{Ar as Ig,Ei as WV,Er as H_,Fr as Jn,H as Lf,Hi as ar,Ja as vt,Li as ZO,Mr as Jc,Ri as Zg,Vi as _u,Xn as $O,Xt as ere,Yi as eF,Zt as fae,ca as jk,ea as ge$1,en as fze,er as An,fi as Rb,gi as Tk,i as Ac,kr as I,ln as ite,mt as Tze,no as yk,nr as BO,oo as zO,or as Bk,qi as de$1,rt as Qae,tr as B,va as nk,xi as VO,xr as Gb,ya as nm,yi as U_}from"./chunk-DvS_Nb_w.js";import{n as P,t as M}from"./main-HXZZSDJT.js";var G=(()=>{class o{widget={title:`Arraste-me`,body:`Este widget pode ser arrastado livremente.`};static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drag-basic`]],standalone:!1,decls:4,vars:1,consts:[[1,`po-row`],[`p-title`,`Arraste-me`,1,`po-md-4`,3,`p-drag`],[1,`po-font-text`]],template:function(n,p){n&1&&(Jc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2),Tk(3,`Este widget pode ser arrastado livremente. Segure o handle e mova-o.`),Zg()()()),n&2&&(Ig(),Rb(`p-drag`,p.widget))},dependencies:[fae,fze],encapsulation:2})}return o})();var de=o=>({"docs-sample-code-tabs":o});var J=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drag-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,p){n&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Drag Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return p.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-drag-basic/sample-po-drag-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
  <po-widget class="po-md-4" [p-drag]="widget" p-title="Arraste-me">
    <div class="po-font-text">Este widget pode ser arrastado livremente. Segure o handle e mova-o.</div>
  </po-widget>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-drag-basic/sample-po-drag-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-drag-basic',
  templateUrl: './sample-po-drag-basic.component.html',
  standalone: false
})
export class SamplePoDragBasicComponent {
  widget = { title: 'Arraste-me', body: 'Este widget pode ser arrastado livremente.' };
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-drag-basic`),Zg(),_u(23,`hr`)),n&2&&(Ig(5),yk(`po-icon `+p.sampleCodeButtonIcon),Ig(),nm(` `,p.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,de,p.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,G],encapsulation:2,changeDetection:1})}return o})();var me=()=>[`list-doing`,`list-done`];var ce=()=>[`list-todo`,`list-done`];var ge=()=>[`list-todo`,`list-doing`];var q=(o,c)=>c.id;function ue(o,c){if(o&1&&_u(0,`po-widget`,4),o&2){let a=c.$implicit,n=nk();Rb(`p-drag`,a)(`p-title`,n.tasksWidgets()[a.id]?.title)}}function ve(o,c){if(o&1&&_u(0,`po-widget`,7),o&2){let a=c.$implicit,n=nk();Rb(`p-drag`,a)(`p-title`,n.tasksWidgets()[a.id]?.title)}}function he(o,c){if(o&1&&_u(0,`po-widget`,10),o&2){let a=c.$implicit,n=nk();Rb(`p-drag`,a)(`p-title`,n.tasksWidgets()[a.id]?.title)}}var Z=(()=>{class o{todoList=B([{id:`t1`},{id:`t2`},{id:`t3`}]);doingList=B([{id:`d1`},{id:`d2`}]);doneList=B([{id:`f1`}]);tasksWidgets=B({t1:{title:`Criar wireframes`},t2:{title:`Definir contrato da API`},t3:{title:`Escrever testes unitários`},d1:{title:`Implementar tela de login`},d2:{title:`Configurar CI/CD`},f1:{title:`Kickoff do projeto`}});listMap={"list-todo":`todo`,"list-doing":`doing`,"list-done":`done`};onDropped(a,n){if(this.setList(n,a.items),a.previousContainer){let p=this.listMap[a.previousContainer];p&&this.setList(p,this.getList(p).filter(g=>g.id!==a.item.id))}}getList(a){switch(a){case`todo`:return this.todoList();case`doing`:return this.doingList();case`done`:return this.doneList()}}setList(a,n){switch(a){case`todo`:this.todoList.set(n);break;case`doing`:this.doingList.set(n);break;case`done`:this.doneList.set(n)}}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drop-list-vertical`]],standalone:!1,decls:16,vars:12,consts:[[1,`po-row`],[1,`po-md-4`,3,`p-height`],[`p-label`,`A Fazer`],[`p-drop-list-id`,`list-todo`,1,`po-row`,2,`min-height`,`100px`,3,`p-dropped`,`p-drop-list`,`p-drop-list-connected-to`],[`p-tag`,`A Fazer`,`p-tag-type`,`warning`,1,`po-md-12`,`po-mb-2`,3,`p-drag`,`p-title`],[`p-label`,`Em Andamento`],[`p-drop-list-id`,`list-doing`,1,`po-row`,2,`min-height`,`100px`,3,`p-dropped`,`p-drop-list`,`p-drop-list-connected-to`],[`p-tag`,`Em Andamento`,`p-tag-type`,`info`,1,`po-md-12`,`po-mb-2`,3,`p-drag`,`p-title`],[`p-label`,`Concluído`],[`p-drop-list-id`,`list-done`,`p-drop-list-disabled`,``,1,`po-row`,2,`min-height`,`100px`,3,`p-dropped`,`p-drop-list`,`p-drop-list-connected-to`],[`p-tag`,`Concluído`,`p-tag-type`,`success`,1,`po-md-12`,`po-mb-2`,3,`p-drag`,`p-title`]],template:function(n,p){n&1&&(Jc(0,`div`,0)(1,`po-container`,1),_u(2,`po-divider`,2),Jc(3,`div`,3),vt(`p-dropped`,function(D){return p.onDropped(D,`todo`)}),$O(4,ue,1,2,`po-widget`,4,q),Zg()(),Jc(6,`po-container`,1),_u(7,`po-divider`,5),Jc(8,`div`,6),vt(`p-dropped`,function(D){return p.onDropped(D,`doing`)}),$O(9,ve,1,2,`po-widget`,7,q),Zg()(),Jc(11,`po-container`,1),_u(12,`po-divider`,8),Jc(13,`div`,9),vt(`p-dropped`,function(D){return p.onDropped(D,`done`)}),$O(14,he,1,2,`po-widget`,10,q),Zg()()()),n&2&&(Ig(),Rb(`p-height`,500),Ig(2),Rb(`p-drop-list`,p.todoList())(`p-drop-list-connected-to`,jk(9,me)),Ig(),zO(p.todoList()),Ig(2),Rb(`p-height`,500),Ig(2),Rb(`p-drop-list`,p.doingList())(`p-drop-list-connected-to`,jk(10,ce)),Ig(),zO(p.doingList()),Ig(2),Rb(`p-height`,500),Ig(2),Rb(`p-drop-list`,p.doneList())(`p-drop-list-connected-to`,jk(11,ge)),Ig(),zO(p.doneList()))},dependencies:[Ac,Lf,fae,fze,ite],encapsulation:2})}return o})();var Ce=o=>({"docs-sample-code-tabs":o});var ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drop-list-vertical-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,p){n&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Drop List - Vertical (Kanban)`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return p.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-drop-list-vertical/sample-po-drop-list-vertical.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-drop-list-vertical/sample-po-drop-list-vertical.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, signal } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-drop-list-vertical`),Zg(),_u(23,`hr`)),n&2&&(Ig(5),yk(`po-icon `+p.sampleCodeButtonIcon),Ig(),nm(` `,p.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ce,p.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Z],encapsulation:2,changeDetection:1})}return o})();var De=(o,c)=>c.id;function Se(o,c){if(o&1&&(Jc(0,`po-widget`,4)(1,`p`),Tk(2),Zg()()),o&2){let a=c.$implicit,n=nk();Rb(`p-drag`,a)(`p-title`,n.stepsWidgets()[a.id]?.title),Ig(2),Gb(n.stepsWidgets()[a.id]?.title)}}var te=(()=>{class o{steps=B([{id:`s1`},{id:`s2`},{id:`s3`},{id:`s4`}]);stepsWidgets=B({s1:{title:`Requisitos`},s2:{title:`Design`},s3:{title:`Desenvolvimento`},s4:{title:`Testes`}});onDropped(a){this.steps.set(a.items)}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drop-list-horizontal`]],standalone:!1,decls:7,vars:1,consts:[[`p-title`,`Pipeline — Orientação Horizontal`],[1,`po-font-text`,`po-mb-3`],[1,`po-row`],[`p-drop-list-id`,`list-horizontal`,`p-drop-list-orientation`,`horizontal`,1,`po-md-12`,3,`p-dropped`,`p-drop-list`],[`p-tag-type`,`info`,1,`po-md-3`,`po-mb-2`,3,`p-drag`,`p-title`]],template:function(n,p){n&1&&(Jc(0,`po-container`,0)(1,`p`,1),Tk(2,` Arraste as etapas para reordenar o pipeline. Os itens ficam lado a lado e a troca é detectada pelo eixo X. `),Zg(),Jc(3,`div`,2)(4,`div`,3),vt(`p-dropped`,function(D){return p.onDropped(D)}),$O(5,Se,3,3,`po-widget`,4,De),Zg()()()),n&2&&(Ig(4),Rb(`p-drop-list`,p.steps()),Ig(),zO(p.steps()))},dependencies:[Ac,fae,fze,ite],encapsulation:2})}return o})();var xe=o=>({"docs-sample-code-tabs":o});var ie=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drop-list-horizontal-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,p){n&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Drop List - Horizontal (Pipeline)`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return p.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-drop-list-horizontal/sample-po-drop-list-horizontal.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-container p-title="Pipeline \u2014 Orienta\xE7\xE3o Horizontal">
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
          <p>{ { stepsWidgets()[step.id]?.title }}</p>
        </po-widget>
      }
    </div>
  </div>
</po-container>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-drop-list-horizontal/sample-po-drop-list-horizontal.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, signal } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-drop-list-horizontal`),Zg(),_u(23,`hr`)),n&2&&(Ig(5),yk(`po-icon `+p.sampleCodeButtonIcon),Ig(),nm(` `,p.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,xe,p.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,te],encapsulation:2,changeDetection:1})}return o})();var we=(o,c)=>c.id;function ye(o,c){if(o&1&&(Jc(0,`po-widget`,4)(1,`p`),Tk(2),Zg()()),o&2){let a=c.$implicit,n=nk();Rb(`p-drag`,a)(`p-title`,n.cardsWidgets()[a.id]?.title),Ig(2),Gb(n.cardsWidgets()[a.id]?.title)}}var oe=(()=>{class o{cards=B([{id:`c1`},{id:`c2`},{id:`c3`},{id:`c4`},{id:`c5`},{id:`c6`}]);cardsWidgets=B({c1:{title:`Faturamento`},c2:{title:`Estoque`},c3:{title:`Compras`},c4:{title:`RH`},c5:{title:`Fiscal`},c6:{title:`Financeiro`}});onDropped(a){this.cards.set(a.items)}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drop-list-mixed`]],standalone:!1,decls:7,vars:1,consts:[[`p-title`,`Dashboard — Orientação Mixed`],[1,`po-font-text`,`po-mb-3`],[1,`po-row`],[`p-drop-list-id`,`list-mixed`,`p-drop-list-orientation`,`mixed`,1,`po-md-12`,3,`p-dropped`,`p-drop-list`],[`p-tag-type`,`neutral`,1,`po-md-4`,`po-mb-2`,3,`p-drag`,`p-title`]],template:function(n,p){n&1&&(Jc(0,`po-container`,0)(1,`p`,1),Tk(2,` Arraste os cards para reorganizar o layout do dashboard. A orientação mixed detecta trocas nos eixos X e Y, ideal para layouts em grid onde os itens quebram em múltiplas linhas. `),Zg(),Jc(3,`div`,2)(4,`div`,3),vt(`p-dropped`,function(D){return p.onDropped(D)}),$O(5,ye,3,3,`po-widget`,4,we),Zg()()()),n&2&&(Ig(4),Rb(`p-drop-list`,p.cards()),Ig(),zO(p.cards()))},dependencies:[Ac,fae,fze,ite],encapsulation:2})}return o})();var _e=o=>({"docs-sample-code-tabs":o});var ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drop-list-mixed-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,p){n&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Drop List - Mixed (Dashboard)`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return p.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-drop-list-mixed/sample-po-drop-list-mixed.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-container p-title="Dashboard \u2014 Orienta\xE7\xE3o Mixed">
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
          <p>{ { cardsWidgets()[card.id]?.title }}</p>
        </po-widget>
      }
    </div>
  </div>
</po-container>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-drop-list-mixed/sample-po-drop-list-mixed.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, signal } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-drop-list-mixed`),Zg(),_u(23,`hr`)),n&2&&(Ig(5),yk(`po-icon `+p.sampleCodeButtonIcon),Ig(),nm(` `,p.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,_e,p.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,oe],encapsulation:2,changeDetection:1})}return o})();var ae=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drag-doc`]],standalone:!1,decls:226,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoDraggableItem`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(n,p){n&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoDragDropModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo que exporta as diretivas de drag & drop do PO UI:`),Zg(),Jc(7,`ul`)(8,`li`)(9,`code`),Tk(10,`PoDropListDirective`),Zg(),Tk(11,` (`),Jc(12,`code`),Tk(13,`p-drop-list`),Zg(),Tk(14,`) — define um container de drop.`),Zg(),Jc(15,`li`)(16,`code`),Tk(17,`PoDragDirective`),Zg(),Tk(18,` (`),Jc(19,`code`),Tk(20,`p-drag`),Zg(),Tk(21,`) — torna um elemento arrastável.`),Zg()()(),Jc(22,`h3`,3),Tk(23,`Componente`),Zg(),Jc(24,`h4`,4)(25,`code`,5),Tk(26,`PoDragDirective`),Zg()(),Jc(27,`div`,2)(28,`p`),Tk(29,` A diretiva `),Jc(30,`code`),Tk(31,`p-drag`),Zg(),Tk(32,` torna um elemento arrastável, encapsulando o `),Jc(33,`code`),Tk(34,`CdkDrag`),Zg(),Tk(35,` do Angular CDK.`),Zg(),Jc(36,`p`),Tk(37,`Ela pode ser usada em conjunto com a diretiva `),Jc(38,`code`),Tk(39,`p-drop-list`),Zg(),Tk(40,`. O valor atribuído ao seletor (`),Jc(41,`code`),Tk(42,`p-drag`),Zg(),Tk(43,`)
corresponde ao dado do item, que \xE9 emitido nos eventos de drag.`),Zg(),Jc(44,`blockquote`)(45,`p`),Tk(46,`Atualmente validada com o componente `),Jc(47,`code`),Tk(48,`po-widget`),Zg(),Tk(49,`. O suporte a outros componentes
PO UI ser\xE1 avaliado em vers\xF5es futuras.`),Zg()()(),Jc(50,`div`,6)(51,`h4`,7),Tk(52,`Seletor`),Zg(),Jc(53,`pre`,8),Tk(54,`<[p-drag]
    p-drag="PoDraggableItem"
    p-drag-disabled="boolean"
    (p-drag-ended)="EventEmitter"
    (p-drag-moved)="EventEmitter"
    (p-drag-started)="EventEmitter" >
</[p-drag]>
`),Zg()(),Jc(55,`h4`,9),Tk(56,`Propriedades`),Zg(),Jc(57,`table`,10)(58,`tr`,11)(59,`th`,12),Tk(60,`Nome`),Zg(),Jc(61,`th`,12),Tk(62,`Tipo`),Zg(),Jc(63,`th`,12),Tk(64,`Padrão`),Zg(),Jc(65,`th`,12),Tk(66,`Descrição`),Zg()(),Jc(67,`tr`,13)(68,`td`,14)(69,`div`,15)(70,`span`,16),Tk(71,` p-drag`),_u(72,`br`),Zg()()(),Jc(73,`td`,17)(74,`code`,18),Tk(75,`PoDraggableItem`),Zg()(),Jc(76,`td`,19),Tk(77,`-`),Zg(),Jc(78,`td`,20)(79,`p`),Tk(80,`Dado associado ao item arrast\xE1vel. O valor \xE9 emitido nos eventos
`),Jc(81,`code`),Tk(82,`p-drag-started`),Zg(),Tk(83,` e `),Jc(84,`code`),Tk(85,`p-drag-ended`),Zg(),Tk(86,`.`),Zg()()(),Jc(87,`tr`,13)(88,`td`,14)(89,`div`,15)(90,`span`,16),Tk(91,` p-drag-disabled`),_u(92,`br`),Zg()()(),Jc(93,`td`,17)(94,`code`,21),Tk(95,`boolean`),Zg()(),Jc(96,`td`,19)(97,`p`),Tk(98,`false`),Zg()(),Jc(99,`td`,20)(100,`em`)(101,`strong`),Tk(102,`(opcional)`),Zg()(),Jc(103,`p`),Tk(104,`Desabilita o arraste do item. Quando `),Jc(105,`code`),Tk(106,`true`),Zg(),Tk(107,`, o usu\xE1rio n\xE3o pode iniciar
um gesto de arrastar neste elemento, mas o item continua participando do
c\xE1lculo de posi\xE7\xF5es dos vizinhos dentro do `),Jc(108,`code`),Tk(109,`p-drop-list`),Zg(),Tk(110,`.`),Zg()()(),Jc(111,`tr`,13)(112,`td`,14)(113,`div`,22)(114,`span`,23),Tk(115,` (p-drag-ended)`),_u(116,`br`),Zg()()(),Jc(117,`td`,17)(118,`code`,24),Tk(119,`EventEmitter`),Zg()(),Jc(120,`td`,19),Tk(121,`-`),Zg(),Jc(122,`td`,20)(123,`em`)(124,`strong`),Tk(125,`(opcional)`),Zg()(),Jc(126,`p`),Tk(127,`Evento emitido quando o arraste do item \xE9 encerrado.
O valor emitido \xE9 o dado associado ao item (propriedade `),Jc(128,`code`),Tk(129,`p-drag`),Zg(),Tk(130,`).`),Zg()()(),Jc(131,`tr`,13)(132,`td`,14)(133,`div`,22)(134,`span`,23),Tk(135,` (p-drag-moved)`),_u(136,`br`),Zg()()(),Jc(137,`td`,17)(138,`code`,24),Tk(139,`EventEmitter`),Zg()(),Jc(140,`td`,19),Tk(141,`-`),Zg(),Jc(142,`td`,20)(143,`em`)(144,`strong`),Tk(145,`(opcional)`),Zg()(),Jc(146,`p`),Tk(147,`Evento emitido continuamente enquanto o item est\xE1 sendo arrastado.
Cont\xE9m a posi\xE7\xE3o do ponteiro, a dist\xE2ncia percorrida e a dire\xE7\xE3o do movimento.`),Zg(),Jc(148,`blockquote`)(149,`p`)(150,`strong`),Tk(151,`Atenção:`),Zg(),Tk(152,` Este evento \xE9 disparado em alta frequ\xEAncia (a cada frame de movimento).
Evite opera\xE7\xF5es custosas no handler ou aplique t\xE9cnicas de throttle/debounce.`),Zg()()()(),Jc(153,`tr`,13)(154,`td`,14)(155,`div`,22)(156,`span`,23),Tk(157,` (p-drag-started)`),_u(158,`br`),Zg()()(),Jc(159,`td`,17)(160,`code`,24),Tk(161,`EventEmitter`),Zg()(),Jc(162,`td`,19),Tk(163,`-`),Zg(),Jc(164,`td`,20)(165,`em`)(166,`strong`),Tk(167,`(opcional)`),Zg()(),Jc(168,`p`),Tk(169,`Evento emitido quando o arraste do item \xE9 iniciado.
O valor emitido \xE9 o dado associado ao item (propriedade `),Jc(170,`code`),Tk(171,`p-drag`),Zg(),Tk(172,`).`),Zg()()()(),Jc(173,`h3`),Tk(174,`Interfaces`),Zg(),Jc(175,`h4`,25)(176,`code`,5),Tk(177,`PoDraggableItem`),Zg()(),Jc(178,`div`,2)(179,`p`),Tk(180,`Define a estrutura de um item arrast\xE1vel gen\xE9rico utilizado pelas diretivas
`),Jc(181,`code`),Tk(182,`PoDropListDirective`),Zg(),Tk(183,` e `),Jc(184,`code`),Tk(185,`PoDragDirective`),Zg(),Tk(186,`.`),Zg(),Jc(187,`p`),Tk(188,`A interface \xE9 intencionalmente leve \u2014 cont\xE9m apenas os campos essenciais para
qualquer componente arrast\xE1vel.`),Zg()(),Jc(189,`h4`,9),Tk(190,`Propriedades`),Zg(),Jc(191,`table`,10)(192,`tr`,11)(193,`th`,12),Tk(194,`Nome`),Zg(),Jc(195,`th`,12),Tk(196,`Tipo`),Zg(),Jc(197,`th`,12),Tk(198,`Descrição`),Zg()(),Jc(199,`tr`,13)(200,`td`,14)(201,`div`,15)(202,`span`,16),Tk(203,` data`),_u(204,`br`),Zg()()(),Jc(205,`td`,17)(206,`code`,26),Tk(207,`any`),Zg()(),Jc(208,`td`,20)(209,`em`)(210,`strong`),Tk(211,`(opcional)`),Zg()(),Jc(212,`p`),Tk(213,`Dados arbitr\xE1rios do consumidor. \xDAtil para associar informa\xE7\xF5es extras
ao item sem estender a interface.`),Zg()()(),Jc(214,`tr`,13)(215,`td`,14)(216,`div`,15)(217,`span`,16),Tk(218,` id`),_u(219,`br`),Zg()()(),Jc(220,`td`,17)(221,`code`,27),Tk(222,`string`),Zg()(),Jc(223,`td`,20)(224,`p`),Tk(225,`Identificador único do item.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Me(o,c){if(o&1){let a=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(a);let p=nk();return H_(p.changeTab(`web`))}),_u(1,`sample-po-drag-basic-view`)(2,`sample-po-drop-list-vertical-view`)(3,`sample-po-drop-list-horizontal-view`)(4,`sample-po-drop-list-mixed-view`),Zg()}if(o&2){let a=nk();Rb(`p-active`,a.activeTab===`web`)}}var Ie=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Drag`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(n,p){n&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Me,5,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return p.changeTab(`doc`)}),_u(4,`sample-po-drag-doc`),Zg()()()),n&2&&(Rb(`p-actions`,p.actions),Ig(2),BO(p.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,p.activeTab===`doc`))},dependencies:[Tze,Qae,ere,J,ee,ie,ne,ae],encapsulation:2,changeDetection:1})}return o})()}];var re=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[WV.forChild(Ie),WV]})}return o})();var ct=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[M,re]})}return o})();export{ct as DocPoDragModule};