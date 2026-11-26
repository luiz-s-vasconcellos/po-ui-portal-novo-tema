import{m as P,p as M}from"./main-ZE6YMYJ4.js";import{Bn as yae,Dn as tre,Er as GV,Ft as are,G as Nf,Gi as _t,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,Ni as Wb,Oi as Vk,Pr as I$1,Un as yze,Vr as Kg,W as Mze,Wr as LO,Ya as tk,Yn as $O,_a as jO,ar as B_,ca as ge$1,ea as de$1,er as Ab,kr as HO,nr as B,qr as Mk,ro as wg,tr as An,va as j_,w as Fc,wn as ste}from"./chunk-CTJH0VS3.js";var U=(()=>{class o{widget={title:`Arraste-me`,body:`Este widget pode ser arrastado livremente.`};static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drag-basic`]],standalone:!1,decls:4,vars:1,consts:[[1,`po-row`],[`p-title`,`Arraste-me`,1,`po-md-4`,3,`p-drag`],[1,`po-font-text`]],template:function(n,p){n&1&&(Jc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2),Mk(3,`Este widget pode ser arrastado livremente. Segure o handle e mova-o.`),Kg()()()),n&2&&(wg(),Ab(`p-drag`,p.widget))},dependencies:[yae,yze],encapsulation:2})}return o})();var K=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drag-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-drag-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-drag-basic/sample-po-drag-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-drag-basic/sample-po-drag-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(n,p){n&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Drag Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-drag-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-drag-basic/sample-po-drag-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
  <po-widget class="po-md-4" [p-drag]="widget" p-title="Arraste-me">
    <div class="po-font-text">Este widget pode ser arrastado livremente. Segure o handle e mova-o.</div>
  </po-widget>
</div>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-drag-basic/sample-po-drag-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-drag-basic',
  templateUrl: './sample-po-drag-basic.component.html',
  standalone: false
})
export class SamplePoDragBasicComponent {
  widget = { title: 'Arraste-me', body: 'Este widget pode ser arrastado livremente.' };
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,U],encapsulation:2,changeDetection:1})}return o})();var ae=()=>[`list-doing`,`list-done`];var re=()=>[`list-todo`,`list-done`];var pe=()=>[`list-todo`,`list-doing`];var I=(o,m)=>m.id;function de(o,m){if(o&1&&_u(0,`po-widget`,4),o&2){let a=m.$implicit,n=tk();Ab(`p-drag`,a)(`p-title`,n.tasksWidgets()[a.id]?.title)}}function se(o,m){if(o&1&&_u(0,`po-widget`,7),o&2){let a=m.$implicit,n=tk();Ab(`p-drag`,a)(`p-title`,n.tasksWidgets()[a.id]?.title)}}function le(o,m){if(o&1&&_u(0,`po-widget`,10),o&2){let a=m.$implicit,n=tk();Ab(`p-drag`,a)(`p-title`,n.tasksWidgets()[a.id]?.title)}}var X=(()=>{class o{todoList=B([{id:`t1`},{id:`t2`},{id:`t3`}]);doingList=B([{id:`d1`},{id:`d2`}]);doneList=B([{id:`f1`}]);tasksWidgets=B({t1:{title:`Criar wireframes`},t2:{title:`Definir contrato da API`},t3:{title:`Escrever testes unitários`},d1:{title:`Implementar tela de login`},d2:{title:`Configurar CI/CD`},f1:{title:`Kickoff do projeto`}});listMap={"list-todo":`todo`,"list-doing":`doing`,"list-done":`done`};onDropped(a,n){if(this.setList(n,a.items),a.previousContainer){let p=this.listMap[a.previousContainer];p&&this.setList(p,this.getList(p).filter(w=>w.id!==a.item.id))}}getList(a){switch(a){case`todo`:return this.todoList();case`doing`:return this.doingList();case`done`:return this.doneList()}}setList(a,n){switch(a){case`todo`:this.todoList.set(n);break;case`doing`:this.doingList.set(n);break;case`done`:this.doneList.set(n)}}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drop-list-vertical`]],standalone:!1,decls:16,vars:12,consts:[[1,`po-row`],[1,`po-md-4`,3,`p-height`],[`p-label`,`A Fazer`],[`p-drop-list-id`,`list-todo`,1,`po-row`,2,`min-height`,`100px`,3,`p-dropped`,`p-drop-list`,`p-drop-list-connected-to`],[`p-tag`,`A Fazer`,`p-tag-type`,`warning`,1,`po-md-12`,`po-mb-2`,3,`p-drag`,`p-title`],[`p-label`,`Em Andamento`],[`p-drop-list-id`,`list-doing`,1,`po-row`,2,`min-height`,`100px`,3,`p-dropped`,`p-drop-list`,`p-drop-list-connected-to`],[`p-tag`,`Em Andamento`,`p-tag-type`,`info`,1,`po-md-12`,`po-mb-2`,3,`p-drag`,`p-title`],[`p-label`,`Concluído`],[`p-drop-list-id`,`list-done`,`p-drop-list-disabled`,``,1,`po-row`,2,`min-height`,`100px`,3,`p-dropped`,`p-drop-list`,`p-drop-list-connected-to`],[`p-tag`,`Concluído`,`p-tag-type`,`success`,1,`po-md-12`,`po-mb-2`,3,`p-drag`,`p-title`]],template:function(n,p){n&1&&(Jc(0,`div`,0)(1,`po-container`,1),_u(2,`po-divider`,2),Jc(3,`div`,3),_t(`p-dropped`,function(f){return p.onDropped(f,`todo`)}),HO(4,de,1,2,`po-widget`,4,I),Kg()(),Jc(6,`po-container`,1),_u(7,`po-divider`,5),Jc(8,`div`,6),_t(`p-dropped`,function(f){return p.onDropped(f,`doing`)}),HO(9,se,1,2,`po-widget`,7,I),Kg()(),Jc(11,`po-container`,1),_u(12,`po-divider`,8),Jc(13,`div`,9),_t(`p-dropped`,function(f){return p.onDropped(f,`done`)}),HO(14,le,1,2,`po-widget`,10,I),Kg()()()),n&2&&(wg(),Ab(`p-height`,500),wg(2),Ab(`p-drop-list`,p.todoList())(`p-drop-list-connected-to`,Vk(9,ae)),wg(),$O(p.todoList()),wg(2),Ab(`p-height`,500),wg(2),Ab(`p-drop-list`,p.doingList())(`p-drop-list-connected-to`,Vk(10,re)),wg(),$O(p.doingList()),wg(2),Ab(`p-height`,500),wg(2),Ab(`p-drop-list`,p.doneList())(`p-drop-list-connected-to`,Vk(11,pe)),wg(),$O(p.doneList()))},dependencies:[Fc,Nf,yae,yze,ste],encapsulation:2})}return o})();var Y=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drop-list-vertical-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-drop-list-vertical`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-drop-list-vertical/sample-po-drop-list-vertical.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-drop-list-vertical/sample-po-drop-list-vertical.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(n,p){n&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Drop List - Vertical (Kanban)`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-drop-list-vertical`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-drop-list-vertical/sample-po-drop-list-vertical.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-drop-list-vertical/sample-po-drop-list-vertical.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, signal } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,X],encapsulation:2,changeDetection:1})}return o})();var ge=(o,m)=>m.id;function ue(o,m){if(o&1&&(Jc(0,`po-widget`,4)(1,`p`),Mk(2),Kg()()),o&2){let a=m.$implicit,n=tk();Ab(`p-drag`,a)(`p-title`,n.stepsWidgets()[a.id]?.title),wg(2),Wb(n.stepsWidgets()[a.id]?.title)}}var Q=(()=>{class o{steps=B([{id:`s1`},{id:`s2`},{id:`s3`},{id:`s4`}]);stepsWidgets=B({s1:{title:`Requisitos`},s2:{title:`Design`},s3:{title:`Desenvolvimento`},s4:{title:`Testes`}});onDropped(a){this.steps.set(a.items)}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drop-list-horizontal`]],standalone:!1,decls:7,vars:1,consts:[[`p-title`,`Pipeline — Orientação Horizontal`],[1,`po-font-text`,`po-mb-3`],[1,`po-row`],[`p-drop-list-id`,`list-horizontal`,`p-drop-list-orientation`,`horizontal`,1,`po-md-12`,3,`p-dropped`,`p-drop-list`],[`p-tag-type`,`info`,1,`po-md-3`,`po-mb-2`,3,`p-drag`,`p-title`]],template:function(n,p){n&1&&(Jc(0,`po-container`,0)(1,`p`,1),Mk(2,` Arraste as etapas para reordenar o pipeline. Os itens ficam lado a lado e a troca é detectada pelo eixo X. `),Kg(),Jc(3,`div`,2)(4,`div`,3),_t(`p-dropped`,function(f){return p.onDropped(f)}),HO(5,ue,3,3,`po-widget`,4,ge),Kg()()()),n&2&&(wg(4),Ab(`p-drop-list`,p.steps()),wg(),$O(p.steps()))},dependencies:[Fc,yae,yze,ste],encapsulation:2})}return o})();var G=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drop-list-horizontal-view`]],standalone:!1,decls:30,vars:0,consts:[[`id`,`sample-po-drop-list-horizontal`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-drop-list-horizontal/sample-po-drop-list-horizontal.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-drop-list-horizontal/sample-po-drop-list-horizontal.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(n,p){n&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Drop List - Horizontal (Pipeline)`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-drop-list-horizontal`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-drop-list-horizontal/sample-po-drop-list-horizontal.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-container p-title="Pipeline \u2014 Orienta\xE7\xE3o Horizontal">
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
          <p>`),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` stepsWidgets()[step.id]?.title `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`</p>
        </po-widget>
      }
    </div>
  </div>
</po-container>
`),Kg()()()(),Jc(22,`po-tab`,10)(23,`div`)(24,`label`,7),Mk(25,`sample-po-drop-list-horizontal/sample-po-drop-list-horizontal.component.ts`),Kg(),Jc(26,`div`,11)(27,`pre`,12),Mk(28,`import { Component, signal } from '@angular/core';
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
`),Kg()()()()()(),_u(29,`hr`))},dependencies:[P,tre,are,Q],encapsulation:2,changeDetection:1})}return o})();var be=(o,m)=>m.id;function De(o,m){if(o&1&&(Jc(0,`po-widget`,4)(1,`p`),Mk(2),Kg()()),o&2){let a=m.$implicit,n=tk();Ab(`p-drag`,a)(`p-title`,n.cardsWidgets()[a.id]?.title),wg(2),Wb(n.cardsWidgets()[a.id]?.title)}}var J=(()=>{class o{cards=B([{id:`c1`},{id:`c2`},{id:`c3`},{id:`c4`},{id:`c5`},{id:`c6`}]);cardsWidgets=B({c1:{title:`Faturamento`},c2:{title:`Estoque`},c3:{title:`Compras`},c4:{title:`RH`},c5:{title:`Fiscal`},c6:{title:`Financeiro`}});onDropped(a){this.cards.set(a.items)}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drop-list-mixed`]],standalone:!1,decls:7,vars:1,consts:[[`p-title`,`Dashboard — Orientação Mixed`],[1,`po-font-text`,`po-mb-3`],[1,`po-row`],[`p-drop-list-id`,`list-mixed`,`p-drop-list-orientation`,`mixed`,1,`po-md-12`,3,`p-dropped`,`p-drop-list`],[`p-tag-type`,`neutral`,1,`po-md-4`,`po-mb-2`,3,`p-drag`,`p-title`]],template:function(n,p){n&1&&(Jc(0,`po-container`,0)(1,`p`,1),Mk(2,` Arraste os cards para reorganizar o layout do dashboard. A orientação mixed detecta trocas nos eixos X e Y, ideal para layouts em grid onde os itens quebram em múltiplas linhas. `),Kg(),Jc(3,`div`,2)(4,`div`,3),_t(`p-dropped`,function(f){return p.onDropped(f)}),HO(5,De,3,3,`po-widget`,4,be),Kg()()()),n&2&&(wg(4),Ab(`p-drop-list`,p.cards()),wg(),$O(p.cards()))},dependencies:[Fc,yae,yze,ste],encapsulation:2})}return o})();var Z=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drop-list-mixed-view`]],standalone:!1,decls:30,vars:0,consts:[[`id`,`sample-po-drop-list-mixed`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-drop-list-mixed/sample-po-drop-list-mixed.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-drop-list-mixed/sample-po-drop-list-mixed.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(n,p){n&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Drop List - Mixed (Dashboard)`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-drop-list-mixed`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-drop-list-mixed/sample-po-drop-list-mixed.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-container p-title="Dashboard \u2014 Orienta\xE7\xE3o Mixed">
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
          <p>`),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` cardsWidgets()[card.id]?.title `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`</p>
        </po-widget>
      }
    </div>
  </div>
</po-container>
`),Kg()()()(),Jc(22,`po-tab`,10)(23,`div`)(24,`label`,7),Mk(25,`sample-po-drop-list-mixed/sample-po-drop-list-mixed.component.ts`),Kg(),Jc(26,`div`,11)(27,`pre`,12),Mk(28,`import { Component, signal } from '@angular/core';
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
`),Kg()()()()()(),_u(29,`hr`))},dependencies:[P,tre,are,J],encapsulation:2,changeDetection:1})}return o})();var ee=(()=>{class o{router=p(An);openDoc(a){this.router.navigate([`/documentation`,a],{queryParams:{view:`doc`}})}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-drag-doc`]],standalone:!1,decls:226,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-drag-directive`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-drag`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoDraggableItem`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-drag-disabled`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`event-p-drag-ended`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`event-p-drag-moved`,1,`docs-api-properties-row`],[`id`,`event-p-drag-started`,1,`docs-api-properties-row`],[`id`,`interface-po-draggable-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-draggable-item-data`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any`],[`id`,`interface-po-draggable-item-id`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(n,p){n&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoDragDropModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo que exporta as diretivas de drag & drop do PO UI:`),Kg(),Jc(7,`ul`)(8,`li`)(9,`code`),Mk(10,`PoDropListDirective`),Kg(),Mk(11,` (`),Jc(12,`code`),Mk(13,`p-drop-list`),Kg(),Mk(14,`) — define um container de drop.`),Kg(),Jc(15,`li`)(16,`code`),Mk(17,`PoDragDirective`),Kg(),Mk(18,` (`),Jc(19,`code`),Mk(20,`p-drag`),Kg(),Mk(21,`) — torna um elemento arrastável.`),Kg()()(),Jc(22,`h3`,3),Mk(23,`Componente`),Kg(),Jc(24,`h4`,4)(25,`code`,5),Mk(26,`PoDragDirective`),Kg()(),Jc(27,`div`,2)(28,`p`),Mk(29,` A diretiva `),Jc(30,`code`),Mk(31,`p-drag`),Kg(),Mk(32,` torna um elemento arrastável, encapsulando o `),Jc(33,`code`),Mk(34,`CdkDrag`),Kg(),Mk(35,` do Angular CDK.`),Kg(),Jc(36,`p`),Mk(37,`Ela pode ser usada em conjunto com a diretiva `),Jc(38,`code`),Mk(39,`p-drop-list`),Kg(),Mk(40,`. O valor atribuído ao seletor (`),Jc(41,`code`),Mk(42,`p-drag`),Kg(),Mk(43,`)
corresponde ao dado do item, que \xE9 emitido nos eventos de drag.`),Kg(),Jc(44,`blockquote`)(45,`p`),Mk(46,`Atualmente validada com o componente `),Jc(47,`code`),Mk(48,`po-widget`),Kg(),Mk(49,`. O suporte a outros componentes
PO UI ser\xE1 avaliado em vers\xF5es futuras.`),Kg()()(),Jc(50,`div`,6)(51,`h4`,7),Mk(52,`Seletor`),Kg(),Jc(53,`pre`,8),Mk(54,`<[p-drag]
    p-drag="PoDraggableItem"
    p-drag-disabled="boolean"
    (p-drag-ended)="EventEmitter"
    (p-drag-moved)="EventEmitter"
    (p-drag-started)="EventEmitter" >
</[p-drag]>
`),Kg()(),Jc(55,`h4`,9),Mk(56,`Propriedades`),Kg(),Jc(57,`table`,10)(58,`tr`,11)(59,`th`,12),Mk(60,`Nome`),Kg(),Jc(61,`th`,12),Mk(62,`Tipo`),Kg(),Jc(63,`th`,12),Mk(64,`Padrão`),Kg(),Jc(65,`th`,12),Mk(66,`Descrição`),Kg()(),Jc(67,`tr`,13)(68,`td`,14)(69,`div`,15)(70,`span`,16),Mk(71,` p-drag`),_u(72,`br`),Kg()()(),Jc(73,`td`,17)(74,`code`,18),Mk(75,`PoDraggableItem`),Kg()(),Jc(76,`td`,19),Mk(77,`-`),Kg(),Jc(78,`td`,20)(79,`p`),Mk(80,`Dado associado ao item arrast\xE1vel. O valor \xE9 emitido nos eventos
`),Jc(81,`code`),Mk(82,`p-drag-started`),Kg(),Mk(83,` e `),Jc(84,`code`),Mk(85,`p-drag-ended`),Kg(),Mk(86,`.`),Kg()()(),Jc(87,`tr`,21)(88,`td`,14)(89,`div`,15)(90,`span`,16),Mk(91,` p-drag-disabled`),_u(92,`br`),Kg()()(),Jc(93,`td`,17)(94,`code`,22),Mk(95,`boolean`),Kg()(),Jc(96,`td`,19)(97,`p`),Mk(98,`false`),Kg()(),Jc(99,`td`,20)(100,`em`)(101,`strong`),Mk(102,`(opcional)`),Kg()(),Jc(103,`p`),Mk(104,`Desabilita o arraste do item. Quando `),Jc(105,`code`),Mk(106,`true`),Kg(),Mk(107,`, o usu\xE1rio n\xE3o pode iniciar
um gesto de arrastar neste elemento, mas o item continua participando do
c\xE1lculo de posi\xE7\xF5es dos vizinhos dentro do `),Jc(108,`code`),Mk(109,`p-drop-list`),Kg(),Mk(110,`.`),Kg()()(),Jc(111,`tr`,23)(112,`td`,14)(113,`div`,24)(114,`span`,25),Mk(115,` (p-drag-ended)`),_u(116,`br`),Kg()()(),Jc(117,`td`,17)(118,`code`,26),Mk(119,`EventEmitter`),Kg()(),Jc(120,`td`,19),Mk(121,`-`),Kg(),Jc(122,`td`,20)(123,`em`)(124,`strong`),Mk(125,`(opcional)`),Kg()(),Jc(126,`p`),Mk(127,`Evento emitido quando o arraste do item \xE9 encerrado.
O valor emitido \xE9 o dado associado ao item (propriedade `),Jc(128,`code`),Mk(129,`p-drag`),Kg(),Mk(130,`).`),Kg()()(),Jc(131,`tr`,27)(132,`td`,14)(133,`div`,24)(134,`span`,25),Mk(135,` (p-drag-moved)`),_u(136,`br`),Kg()()(),Jc(137,`td`,17)(138,`code`,26),Mk(139,`EventEmitter`),Kg()(),Jc(140,`td`,19),Mk(141,`-`),Kg(),Jc(142,`td`,20)(143,`em`)(144,`strong`),Mk(145,`(opcional)`),Kg()(),Jc(146,`p`),Mk(147,`Evento emitido continuamente enquanto o item est\xE1 sendo arrastado.
Cont\xE9m a posi\xE7\xE3o do ponteiro, a dist\xE2ncia percorrida e a dire\xE7\xE3o do movimento.`),Kg(),Jc(148,`blockquote`)(149,`p`)(150,`strong`),Mk(151,`Atenção:`),Kg(),Mk(152,` Este evento \xE9 disparado em alta frequ\xEAncia (a cada frame de movimento).
Evite opera\xE7\xF5es custosas no handler ou aplique t\xE9cnicas de throttle/debounce.`),Kg()()()(),Jc(153,`tr`,28)(154,`td`,14)(155,`div`,24)(156,`span`,25),Mk(157,` (p-drag-started)`),_u(158,`br`),Kg()()(),Jc(159,`td`,17)(160,`code`,26),Mk(161,`EventEmitter`),Kg()(),Jc(162,`td`,19),Mk(163,`-`),Kg(),Jc(164,`td`,20)(165,`em`)(166,`strong`),Mk(167,`(opcional)`),Kg()(),Jc(168,`p`),Mk(169,`Evento emitido quando o arraste do item \xE9 iniciado.
O valor emitido \xE9 o dado associado ao item (propriedade `),Jc(170,`code`),Mk(171,`p-drag`),Kg(),Mk(172,`).`),Kg()()()(),Jc(173,`h3`),Mk(174,`Interfaces`),Kg(),Jc(175,`h4`,29)(176,`code`,5),Mk(177,`PoDraggableItem`),Kg()(),Jc(178,`div`,2)(179,`p`),Mk(180,`Define a estrutura de um item arrast\xE1vel gen\xE9rico utilizado pelas diretivas
`),Jc(181,`code`),Mk(182,`PoDropListDirective`),Kg(),Mk(183,` e `),Jc(184,`code`),Mk(185,`PoDragDirective`),Kg(),Mk(186,`.`),Kg(),Jc(187,`p`),Mk(188,`A interface \xE9 intencionalmente leve \u2014 cont\xE9m apenas os campos essenciais para
qualquer componente arrast\xE1vel.`),Kg()(),Jc(189,`h4`,9),Mk(190,`Propriedades`),Kg(),Jc(191,`table`,10)(192,`tr`,11)(193,`th`,12),Mk(194,`Nome`),Kg(),Jc(195,`th`,12),Mk(196,`Tipo`),Kg(),Jc(197,`th`,12),Mk(198,`Descrição`),Kg()(),Jc(199,`tr`,30)(200,`td`,14)(201,`div`,15)(202,`span`,16),Mk(203,` data`),_u(204,`br`),Kg()()(),Jc(205,`td`,17)(206,`code`,31),Mk(207,`any`),Kg()(),Jc(208,`td`,20)(209,`em`)(210,`strong`),Mk(211,`(opcional)`),Kg()(),Jc(212,`p`),Mk(213,`Dados arbitr\xE1rios do consumidor. \xDAtil para associar informa\xE7\xF5es extras
ao item sem estender a interface.`),Kg()()(),Jc(214,`tr`,32)(215,`td`,14)(216,`div`,15)(217,`span`,16),Mk(218,` id`),_u(219,`br`),Kg()()(),Jc(220,`td`,17)(221,`code`,33),Mk(222,`string`),Kg()(),Jc(223,`td`,20)(224,`p`),Mk(225,`Identificador único do item.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Se(o,m){if(o&1&&(Jc(0,`div`,1),_u(1,`sample-po-drag-basic-view`)(2,`sample-po-drop-list-vertical-view`)(3,`sample-po-drop-list-horizontal-view`)(4,`sample-po-drop-list-mixed-view`),Kg()),o&2){let a=tk();Ab(`hidden`,a.activeTab!==`web`)}}var Ce=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;title=`Drag`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:n||`web`,this.title=`Drag · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(I$1(ar),I$1(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(n,p){n&1&&(Jc(0,`po-page-default`,0),LO(1,Se,5,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-drag-doc`),Kg()()),n&2&&(Ab(`p-title`,p.title)(`p-actions`,p.actions),wg(),jO(p.hidePoWebSample?-1:1),wg(),Ab(`hidden`,p.activeTab!==`doc`))},dependencies:[Mze,K,Y,G,Z,ee],encapsulation:2,changeDetection:1})}return o})()}];var ie=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[GV.forChild(Ce),GV]})}return o})();var pt=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[M,ie]})}return o})();export{pt as DocPoDragModule};