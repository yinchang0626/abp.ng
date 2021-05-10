import { Component, OnInit, Input, Injector } from '@angular/core';
import { ListService, ABP, PagedResultDto } from '@abp/ng.core';
import { Observable } from 'rxjs';

export type EntityService<T> = {
  getList: (query: ABP.PageQueryParams) => Observable<PagedResultDto<T>>;
};

@Component({
  selector: 'fs-tw-entity-base',
  templateUrl: './entity-base.component.html',
  providers:[
    ListService
  ]
})
export class EntityBaseComponent<T> implements OnInit {
  @Input() title: string;

  @Input() streamCreator: (
    query
  ) => Observable<PagedResultDto<T>>;

  data$: Observable<PagedResultDto<T>>;

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService
    ) {}

  ngOnInit() {
    this.data$ = this.list.hookToQuery(this.streamCreator);
  }
}
