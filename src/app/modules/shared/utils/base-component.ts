import { Observable } from 'rxjs';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscriptions } from 'src/app/utils/rxjs/subscriptions';

export class BaseComponent implements OnDestroy {
	public isLoading: boolean = false;
	public isLoading$: Observable<boolean>;
	public isDisabled: boolean;

	public subscriptions: Subscriptions = new Subscriptions();

	protected onTouchFnBase: () => void = ((): void => {
	});
	protected onChangeFnBase: (value: unknown) => void = ((): void => {
	});
	protected onValidatorChangeFnBase: (value: unknown) => void = ((): void => {
	});

	private changeDetectorRef: ChangeDetectorRef;

	constructor(cdRef?: ChangeDetectorRef) {
		this.changeDetectorRef = cdRef;
		let f = this.ngOnDestroy;

		this.ngOnDestroy = (): void => {
			f.call(this);
			this.subscriptions.unsubscribe();
		};
	}

	protected toggleLoader(isLoading: boolean): void {
		this.isLoading = isLoading;

		if (this.changeDetectorRef) {
			this.changeDetectorRef.markForCheck();
		}
	}

	public ngOnDestroy(): void { // tslint:disable-line
		// no-op
	}
}
