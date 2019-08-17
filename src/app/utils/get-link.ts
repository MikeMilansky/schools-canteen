import { appSettings } from '../app.settings';

export function getLink(link: string): string {
  return `${appSettings.apiLink}/${link}`;
}
