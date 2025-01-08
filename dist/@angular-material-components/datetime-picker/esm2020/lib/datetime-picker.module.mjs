import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatDatepickerModule, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@angular/material/datepicker';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { NgxMatCalendar, NgxMatCalendarHeader } from './calendar';
import { NgxMatCalendarBody } from './calendar-body';
import { DefaultNgxMatCalendarRangeStrategy, NGX_MAT_DATE_RANGE_SELECTION_STRATEGY } from './date-range-selection-strategy';
import { NgxMatDatetimeInput } from './datetime-input';
import { NgxMatDatetimeContent, NgxMatDatetimePicker } from './datetime-picker.component';
import { NgxMatMonthView } from './month-view';
import { NgxMatMultiYearView } from './multi-year-view';
import { NgxMatTimepickerModule } from './timepicker.module';
import { NgxMatYearView } from './year-view';
import * as i0 from "@angular/core";
export class NgxMatDatetimePickerModule {
}
/** @nocollapse */ NgxMatDatetimePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxMatDatetimePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
/** @nocollapse */ NgxMatDatetimePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: NgxMatDatetimePickerModule, declarations: [NgxMatDatetimePicker,
        NgxMatDatetimeContent,
        NgxMatDatetimeInput,
        NgxMatCalendar,
        NgxMatMonthView,
        NgxMatCalendarBody,
        NgxMatYearView,
        NgxMatMultiYearView,
        NgxMatCalendarHeader], imports: [CommonModule,
        MatDatepickerModule,
        MatDialogModule,
        PortalModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        NgxMatTimepickerModule], exports: [NgxMatDatetimePicker,
        NgxMatDatetimeInput,
        NgxMatCalendar,
        NgxMatMonthView,
        NgxMatCalendarBody,
        NgxMatYearView,
        NgxMatMultiYearView,
        NgxMatCalendarHeader] });
/** @nocollapse */ NgxMatDatetimePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxMatDatetimePickerModule, providers: [
        MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
        {
            provide: NGX_MAT_DATE_RANGE_SELECTION_STRATEGY,
            useClass: DefaultNgxMatCalendarRangeStrategy
        }
    ], imports: [CommonModule,
        MatDatepickerModule,
        MatDialogModule,
        PortalModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        NgxMatTimepickerModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxMatDatetimePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatDatepickerModule,
                        MatDialogModule,
                        PortalModule,
                        FormsModule,
                        MatIconModule,
                        MatButtonModule,
                        MatInputModule,
                        NgxMatTimepickerModule
                    ],
                    exports: [
                        NgxMatDatetimePicker,
                        NgxMatDatetimeInput,
                        NgxMatCalendar,
                        NgxMatMonthView,
                        NgxMatCalendarBody,
                        NgxMatYearView,
                        NgxMatMultiYearView,
                        NgxMatCalendarHeader
                    ],
                    declarations: [
                        NgxMatDatetimePicker,
                        NgxMatDatetimeContent,
                        NgxMatDatetimeInput,
                        NgxMatCalendar,
                        NgxMatMonthView,
                        NgxMatCalendarBody,
                        NgxMatYearView,
                        NgxMatMultiYearView,
                        NgxMatCalendarHeader
                    ],
                    entryComponents: [
                        NgxMatDatetimeContent,
                        NgxMatCalendarHeader
                    ],
                    providers: [
                        MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
                        {
                            provide: NGX_MAT_DATE_RANGE_SELECTION_STRATEGY,
                            useClass: DefaultNgxMatCalendarRangeStrategy
                        }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2RhdGV0aW1lLXBpY2tlci9zcmMvbGliL2RhdGV0aW1lLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUscUJBQXFCLElBQUksZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLCtDQUErQyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDcEgsT0FBTyxFQUFFLHFCQUFxQixJQUFJLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLElBQUksY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1SCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBK0M3QyxNQUFNLE9BQU8sMEJBQTBCOzswSUFBMUIsMEJBQTBCOzJJQUExQiwwQkFBMEIsaUJBdEJqQyxvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLG9CQUFvQixhQTdCcEIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsWUFBWTtRQUNaLFdBQVc7UUFDWCxhQUFhO1FBQ2IsZUFBZTtRQUNmLGNBQWM7UUFDZCxzQkFBc0IsYUFHdEIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLG9CQUFvQjsySUF5QmIsMEJBQTBCLGFBUnpCO1FBQ1IsK0NBQStDO1FBQy9DO1lBQ0csT0FBTyxFQUFFLHFDQUFxQztZQUM5QyxRQUFRLEVBQUUsa0NBQWtDO1NBQzlDO0tBQ0gsWUF6Q0UsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsWUFBWTtRQUNaLFdBQVc7UUFDWCxhQUFhO1FBQ2IsZUFBZTtRQUNmLGNBQWM7UUFDZCxzQkFBc0I7MkZBbUNmLDBCQUEwQjtrQkE3Q3RDLFFBQVE7bUJBQUM7b0JBQ1AsT0FBTyxFQUFFO3dCQUNOLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxzQkFBc0I7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDTixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLG9CQUFvQjtxQkFDdEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNYLG9CQUFvQjt3QkFDcEIscUJBQXFCO3dCQUNyQixtQkFBbUI7d0JBQ25CLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsbUJBQW1CO3dCQUNuQixvQkFBb0I7cUJBQ3RCO29CQUNELGVBQWUsRUFBRTt3QkFDZCxxQkFBcUI7d0JBQ3JCLG9CQUFvQjtxQkFDdEI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNSLCtDQUErQzt3QkFDL0M7NEJBQ0csT0FBTyxFQUFFLHFDQUFxQzs0QkFDOUMsUUFBUSxFQUFFLGtDQUFrQzt5QkFDOUM7cUJBQ0g7aUJBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRMZWdhY3lCdXR0b25Nb2R1bGUgYXMgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWJ1dHRvbic7XG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlLCBNQVRfREFURVBJQ0tFUl9TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWV9QUk9WSURFUiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgTWF0TGVnYWN5RGlhbG9nTW9kdWxlIGFzIE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1kaWFsb2cnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0TGVnYWN5SW5wdXRNb2R1bGUgYXMgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktaW5wdXQnO1xuaW1wb3J0IHsgTmd4TWF0Q2FsZW5kYXIsIE5neE1hdENhbGVuZGFySGVhZGVyIH0gZnJvbSAnLi9jYWxlbmRhcic7XG5pbXBvcnQgeyBOZ3hNYXRDYWxlbmRhckJvZHkgfSBmcm9tICcuL2NhbGVuZGFyLWJvZHknO1xuaW1wb3J0IHsgRGVmYXVsdE5neE1hdENhbGVuZGFyUmFuZ2VTdHJhdGVneSwgTkdYX01BVF9EQVRFX1JBTkdFX1NFTEVDVElPTl9TVFJBVEVHWSB9IGZyb20gJy4vZGF0ZS1yYW5nZS1zZWxlY3Rpb24tc3RyYXRlZ3knO1xuaW1wb3J0IHsgTmd4TWF0RGF0ZXRpbWVJbnB1dCB9IGZyb20gJy4vZGF0ZXRpbWUtaW5wdXQnO1xuaW1wb3J0IHsgTmd4TWF0RGF0ZXRpbWVDb250ZW50LCBOZ3hNYXREYXRldGltZVBpY2tlciB9IGZyb20gJy4vZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hNYXRNb250aFZpZXcgfSBmcm9tICcuL21vbnRoLXZpZXcnO1xuaW1wb3J0IHsgTmd4TWF0TXVsdGlZZWFyVmlldyB9IGZyb20gJy4vbXVsdGkteWVhci12aWV3JztcbmltcG9ydCB7IE5neE1hdFRpbWVwaWNrZXJNb2R1bGUgfSBmcm9tICcuL3RpbWVwaWNrZXIubW9kdWxlJztcbmltcG9ydCB7IE5neE1hdFllYXJWaWV3IH0gZnJvbSAnLi95ZWFyLXZpZXcnO1xuXG5ATmdNb2R1bGUoe1xuICAgaW1wb3J0czogW1xuICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICAgIFBvcnRhbE1vZHVsZSxcbiAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgTWF0SWNvbk1vZHVsZSxcbiAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgIE1hdElucHV0TW9kdWxlLFxuICAgICAgTmd4TWF0VGltZXBpY2tlck1vZHVsZVxuICAgXSxcbiAgIGV4cG9ydHM6IFtcbiAgICAgIE5neE1hdERhdGV0aW1lUGlja2VyLFxuICAgICAgTmd4TWF0RGF0ZXRpbWVJbnB1dCxcbiAgICAgIE5neE1hdENhbGVuZGFyLFxuICAgICAgTmd4TWF0TW9udGhWaWV3LFxuICAgICAgTmd4TWF0Q2FsZW5kYXJCb2R5LFxuICAgICAgTmd4TWF0WWVhclZpZXcsXG4gICAgICBOZ3hNYXRNdWx0aVllYXJWaWV3LFxuICAgICAgTmd4TWF0Q2FsZW5kYXJIZWFkZXJcbiAgIF0sXG4gICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgIE5neE1hdERhdGV0aW1lUGlja2VyLFxuICAgICAgTmd4TWF0RGF0ZXRpbWVDb250ZW50LFxuICAgICAgTmd4TWF0RGF0ZXRpbWVJbnB1dCxcbiAgICAgIE5neE1hdENhbGVuZGFyLFxuICAgICAgTmd4TWF0TW9udGhWaWV3LFxuICAgICAgTmd4TWF0Q2FsZW5kYXJCb2R5LFxuICAgICAgTmd4TWF0WWVhclZpZXcsXG4gICAgICBOZ3hNYXRNdWx0aVllYXJWaWV3LFxuICAgICAgTmd4TWF0Q2FsZW5kYXJIZWFkZXJcbiAgIF0sXG4gICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgIE5neE1hdERhdGV0aW1lQ29udGVudCxcbiAgICAgIE5neE1hdENhbGVuZGFySGVhZGVyXG4gICBdLFxuICAgcHJvdmlkZXJzOiBbXG4gICAgICBNQVRfREFURVBJQ0tFUl9TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWV9QUk9WSURFUixcbiAgICAgIHtcbiAgICAgICAgIHByb3ZpZGU6IE5HWF9NQVRfREFURV9SQU5HRV9TRUxFQ1RJT05fU1RSQVRFR1ksXG4gICAgICAgICB1c2VDbGFzczogRGVmYXVsdE5neE1hdENhbGVuZGFyUmFuZ2VTdHJhdGVneVxuICAgICAgfVxuICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXREYXRldGltZVBpY2tlck1vZHVsZSB7IH1cbiJdfQ==