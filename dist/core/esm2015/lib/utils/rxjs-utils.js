// tslint:disable: max-line-length
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
function isFunction(value) {
    return typeof value === 'function';
}
/**
 * @deprecated no longer working, please use SubscriptionService (https://docs.abp.io/en/abp/latest/UI/Angular/Subscription-Service) instead.
 */
export const takeUntilDestroy = (componentInstance, destroyMethodName = 'ngOnDestroy') => (source) => {
    const originalDestroy = componentInstance[destroyMethodName];
    if (isFunction(originalDestroy) === false) {
        throw new Error(`${componentInstance.constructor.name} is using untilDestroyed but doesn't implement ${destroyMethodName}`);
    }
    if (!componentInstance['__takeUntilDestroy']) {
        componentInstance['__takeUntilDestroy'] = new Subject();
        componentInstance[destroyMethodName] = function () {
            // tslint:disable-next-line: no-unused-expression
            isFunction(originalDestroy) && originalDestroy.apply(this, arguments);
            componentInstance['__takeUntilDestroy'].next(true);
            componentInstance['__takeUntilDestroy'].complete();
        };
    }
    return source.pipe(takeUntil(componentInstance['__takeUntilDestroy']));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnhqcy11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi91dGlscy9yeGpzLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUNsQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxTQUFTLFVBQVUsQ0FBQyxLQUFLO0lBQ3ZCLE9BQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxDQUFDO0FBQ3JDLENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEdBQUcsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUN4RixNQUFxQixFQUNyQixFQUFFO0lBQ0YsTUFBTSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM3RCxJQUFJLFVBQVUsQ0FBQyxlQUFlLENBQUMsS0FBSyxLQUFLLEVBQUU7UUFDekMsTUFBTSxJQUFJLEtBQUssQ0FDYixHQUFHLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxJQUFJLGtEQUFrRCxpQkFBaUIsRUFBRSxDQUMzRyxDQUFDO0tBQ0g7SUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsRUFBRTtRQUM1QyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFeEQsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsR0FBRztZQUNyQyxpREFBaUQ7WUFDakQsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3RFLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25ELGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckQsQ0FBQyxDQUFDO0tBQ0g7SUFDRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFJLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOiBtYXgtbGluZS1sZW5ndGhcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIG5vIGxvbmdlciB3b3JraW5nLCBwbGVhc2UgdXNlIFN1YnNjcmlwdGlvblNlcnZpY2UgKGh0dHBzOi8vZG9jcy5hYnAuaW8vZW4vYWJwL2xhdGVzdC9VSS9Bbmd1bGFyL1N1YnNjcmlwdGlvbi1TZXJ2aWNlKSBpbnN0ZWFkLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRha2VVbnRpbERlc3Ryb3kgPSAoY29tcG9uZW50SW5zdGFuY2UsIGRlc3Ryb3lNZXRob2ROYW1lID0gJ25nT25EZXN0cm95JykgPT4gPFQ+KFxyXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxUPixcclxuKSA9PiB7XHJcbiAgY29uc3Qgb3JpZ2luYWxEZXN0cm95ID0gY29tcG9uZW50SW5zdGFuY2VbZGVzdHJveU1ldGhvZE5hbWVdO1xyXG4gIGlmIChpc0Z1bmN0aW9uKG9yaWdpbmFsRGVzdHJveSkgPT09IGZhbHNlKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGAke2NvbXBvbmVudEluc3RhbmNlLmNvbnN0cnVjdG9yLm5hbWV9IGlzIHVzaW5nIHVudGlsRGVzdHJveWVkIGJ1dCBkb2Vzbid0IGltcGxlbWVudCAke2Rlc3Ryb3lNZXRob2ROYW1lfWAsXHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAoIWNvbXBvbmVudEluc3RhbmNlWydfX3Rha2VVbnRpbERlc3Ryb3knXSkge1xyXG4gICAgY29tcG9uZW50SW5zdGFuY2VbJ19fdGFrZVVudGlsRGVzdHJveSddID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgICBjb21wb25lbnRJbnN0YW5jZVtkZXN0cm95TWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bnVzZWQtZXhwcmVzc2lvblxyXG4gICAgICBpc0Z1bmN0aW9uKG9yaWdpbmFsRGVzdHJveSkgJiYgb3JpZ2luYWxEZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgIGNvbXBvbmVudEluc3RhbmNlWydfX3Rha2VVbnRpbERlc3Ryb3knXS5uZXh0KHRydWUpO1xyXG4gICAgICBjb21wb25lbnRJbnN0YW5jZVsnX190YWtlVW50aWxEZXN0cm95J10uY29tcGxldGUoKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIHJldHVybiBzb3VyY2UucGlwZSh0YWtlVW50aWw8VD4oY29tcG9uZW50SW5zdGFuY2VbJ19fdGFrZVVudGlsRGVzdHJveSddKSk7XHJcbn07XHJcbiJdfQ==