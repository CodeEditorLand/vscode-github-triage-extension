/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// By default, provide a custom config for vscode repositories with bot-triggers included.

import { Config, Shortcuts } from "./types";
import { commentShortcut } from "./utils";

const verification: Shortcuts[number] = {
	category: "Verification",
	description: "Apply common verification labels",
	items: [
		{
			type: "label",
			value: "verified",
			title: "verified",
			color: "rgb(0, 152, 0)",
		},
		{
			type: "label",
			value: "verification-found",
			title: "verification-found",
			color: "rgb(247, 198, 199)",
		},
		{
			type: "label",
			value: "verification-needed",
			title: "verification-needed",
			color: "rgb(212, 197, 249)",
		},
		{
			type: "label",
			value: "verification-steps-needed",
			title: "verification-steps-needed",
			color: "rgb(160, 216, 160)",
		},
		{
			type: "label",
			value: "z-author-verified",
			title: "author-verified",
			color: "rgb(148, 224, 148)",
		},
		{
			type: "label",
			value: "on-testplan",
			title: "on-testplan",
			color: "rgb(226, 161, 194)",
		},
		{
			type: "label",
			value: "testplan-item",
			title: "testplan-item",
			color: "rgb(220, 220, 220)",
		},
	],
};

const milestones: Shortcuts[number] = {
	category: "Milestones",
	items: [
		{
			type: "milestone",
			color: "rgb(255, 150, 150)",
			title: "Backlog",
			value: "Backlog",
		},
		{
			type: "milestone",
			color: "rgb(255, 150, 150)",
			title: "Backlog Candidates",
			value: "Backlog Candidates",
		},
		{
			type: "milestone",
			color: "rgb(255, 150, 150)",
			title: "October 2020",
			value: "October 2020",
		},
		{
			type: "milestone",
			color: "rgb(255, 150, 150)",
			title: "November 2020",
			value: "November 2020",
		},
		{
			type: "milestone",
			color: "rgb(255, 150, 150)",
			title: "On Deck",
			value: "On Deck",
		},
	],
};

const assignees: Shortcuts[number] = {
	category: "Assignees",
	items: [
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "isidorn (Isidor Nikolic)",
			value: "isidorn",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "aeschli (Martin Aeschlimann)",
			value: "aeschli",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "alexdima (Alexandru Dima)",
			value: "alexdima",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "alexr00 (Alex Ross)",
			value: "alexr00",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "bpasero (Benjamin Pasero)",
			value: "bpasero",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "btholt (Brian Holt)",
			value: "btholt",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "chrisdias (Chris Dias)",
			value: "chrisdias",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "chrmarti (Christof Marti)",
			value: "chrmarti",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "Chuxel (Chuck Lantz)",
			value: "Chuxel",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "connor4312 (Connor Peet)",
			value: "connor4312",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "dbaeumer (Dirk Bäumer)",
			value: "dbaeumer",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "deepak1556 (Robo)",
			value: "deepak1556",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "devinvalenciano (Devin Valenciano)",
			value: "devinvalenciano",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "eamodio (Eric Amodio)",
			value: "eamodio",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "egamma (Erich Gamma)",
			value: "egamma",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "fiveisprime (Matt Hernandez)",
			value: "fiveisprime",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "gregvanl (Greg Van Liew)",
			value: "gregvanl",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "joaomoreno (João Moreno)",
			value: "joaomoreno",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "jrieken (Johannes Rieken)",
			value: "jrieken",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "kieferrm (Kai Maetzel)",
			value: "kieferrm",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "lszomoru (Ladislau Szomoru)",
			value: "lszomoru",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "misolori (Miguel Solorio)",
			value: "misolori",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "mjbvz (Matt Bierner)",
			value: "mjbvz",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "rebornix (Peng Lyu)",
			value: "rebornix",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "RMacfarlane (Rachel Macfarlane)",
			value: "RMacfarlane",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "roblourens (Rob Lourens)",
			value: "roblourens",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "sana-ajani (Sana Ajani)",
			value: "sana-ajani",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "JacksonKearl (Jackson Kearl)",
			value: "JacksonKearl",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "sandy081 (Sandeep Somavarapu)",
			value: "sandy081",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "sbatten (SteVen Batten)",
			value: "sbatten",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "stevencl (Steven Clarke)",
			value: "stevencl",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "Tyriar (Daniel Imms)",
			value: "Tyriar",
		},
		{
			type: "assign",
			color: "rgb(245, 222, 179)",
			title: "weinand (Andre Weinand)",
			value: "weinand",
		},
	],
};

const general: Shortcuts[number] = {
	category: "General",
	items: [
		{
			type: "label",
			value: "bug",
			title: "bug",
			color: "rgb(141, 102, 115)",
		},
		{
			type: "label",
			value: "feature-request",
			title: "feature-request",
			color: "rgb(220, 220, 220)",
		},
		{
			type: "label",
			value: "debt",
			title: "debt",
			color: "rgb(220, 220, 220)",
		},
		{
			type: "comment",
			value: "\\closedWith ",
			title: "\\closedWith SHA",
			color: "rgb(226, 161, 194)",
		},
		{
			type: "label",
			value: "needs more info",
			title: "needs more info",
			color: "rgb(226, 161, 194)",
		},
		{
			type: "label",
			value: "~needs more info",
			title: "needs more info (bot comments)",
			color: "rgb(226, 161, 194)",
		},
	],
};

const wontfix: Shortcuts[number] = {
	category: "Won't Fix",
	description: "Trigger bot to close issue and add a comment explaining why",
	items: [
		{
			type: "label",
			value: "*as-designed",
			title: "*as-designed",
			color: "rgb(226, 161, 194)",
		},
		{
			type: "label",
			value: "*caused-by-extension",
			title: "*caused-by-extension",
			color: "rgb(226, 161, 194)",
		},
		{
			type: "label",
			value: "*dev-question",
			title: "*dev-question",
			color: "rgb(226, 161, 194)",
		},
		{
			type: "label",
			value: "*duplicate",
			title: "*duplicate",
			color: "rgb(226, 161, 194)",
		},
		{
			type: "comment",
			value: "\\duplicate #",
			title: "\\duplicate #REF",
			color: "rgb(226, 161, 194)",
		},
		{
			type: "label",
			value: "*english-please",
			title: "*english-please",
			color: "rgb(226, 161, 194)",
		},
		{
			type: "label",
			value: "*extension-candidate",
			title: "*extension-candidate",
			color: "rgb(212, 197, 249)",
		},
		{
			type: "label",
			value: "*not-reproducible",
			title: "*not-reproducible",
			color: "rgb(226, 161, 194)",
		},
		{
			type: "label",
			value: "*off-topic",
			title: "*off-topic",
			color: "rgb(227, 227, 227)",
		},
		{
			type: "label",
			value: "*out-of-scope",
			title: "*out-of-scope",
			color: "rgb(226, 161, 194)",
		},
		{
			type: "label",
			value: "*question",
			title: "*question",
			color: "rgb(220, 220, 220)",
		},
	],
};

export const defaultConfig: Config = {
	"microsoft/vscode": [
		verification,
		{
			category: "Author Verification",
			description:
				"Mark the issue as being verifiable by the original issue author. Helpful for hard-to-repro bugs!",
			items: [
				{
					type: "label",
					value: "author-verification-requested",
					title: "author-verification-requested",
					color: "rgb(212, 197, 249)",
				},
			],
		},
		{
			category: "Caused by Extension",
			description:
				"Trigger bot to close issue and add a comment linking to extension repo",
			items: [
				commentShortcut("Python", "\\extPython"),
				commentShortcut("C", "\\extC"),
				commentShortcut("C++", "\\extC++"),
				commentShortcut("TS", "\\extTS"),
				commentShortcut("JS", "\\extJS"),
				commentShortcut("C#", "\\extC#"),
				commentShortcut("Go", "\\extGo"),
				commentShortcut("Powershell", "\\extPowershell"),
				commentShortcut("LiveShare", "\\extLiveShare"),
				commentShortcut("Docker", "\\extDocker"),
				commentShortcut("Java", "\\extJava"),
				commentShortcut("JavaDebug", "\\extJavaDebug"),
			],
		},
		wontfix,
		general,
		{
			category: "Feature Areas",
			items: [
				{
					type: "label",
					value: "api-finalization",
					title: "api-finalization",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "api-proposal",
					title: "api-proposal",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "authentication",
					title: "authentication",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "breadcrumbs",
					title: "breadcrumbs",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "callhierarchy",
					title: "callhierarchy",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "code-lens",
					title: "code-lens",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "color-palette",
					title: "color-palette",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "comments",
					title: "comments",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "config",
					title: "config",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "context-keys",
					title: "context-keys",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "custom-editors",
					title: "custom-editors",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "debug-console",
					title: "debug-console",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "diff-editor",
					title: "diff-editor",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "dropdown",
					title: "dropdown",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-autoclosing",
					title: "editor-autoclosing",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-autoindent",
					title: "editor-autoindent",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-bracket-matching",
					title: "editor-bracket-matching",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-clipboard",
					title: "editor-clipboard",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-code-actions",
					title: "editor-code-actions",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-color-picker",
					title: "editor-color-picker",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-columnselect",
					title: "editor-columnselect",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-commands",
					title: "editor-commands",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-comments",
					title: "editor-comments",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-contrib",
					title: "editor-contrib",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-core",
					title: "editor-core",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-drag-and-drop",
					title: "editor-drag-and-drop",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-error-widget",
					title: "editor-error-widget",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-find",
					title: "editor-find",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-folding",
					title: "editor-folding",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-hover",
					title: "editor-hover",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-indent-guides",
					title: "editor-indent-guides",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-input-IME",
					title: "editor-input-IME",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-input",
					title: "editor-input",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-insets",
					title: "editor-insets",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-minimap",
					title: "editor-minimap",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-multicursor",
					title: "editor-multicursor",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-parameter-hints",
					title: "editor-parameter-hints",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-render-whitespace",
					title: "editor-render-whitespace",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-rendering",
					title: "editor-rendering",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-scrollbar",
					title: "editor-scrollbar",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-symbols",
					title: "editor-symbols",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-synced-region",
					title: "editor-synced-region",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-textbuffer",
					title: "editor-textbuffer",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-theming",
					title: "editor-theming",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-wordnav",
					title: "editor-wordnav",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "editor-wrapping",
					title: "editor-wrapping",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "extension-host",
					title: "extension-host",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "extension-recommendations",
					title: "extension-recommendations",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "file-decorations",
					title: "file-decorations",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "file-encoding",
					title: "file-encoding",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "file-explorer",
					title: "file-explorer",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "file-glob",
					title: "file-glob",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "file-guess-encoding",
					title: "file-guess-encoding",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "file-io",
					title: "file-io",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "file-watcher",
					title: "file-watcher",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "font-rendering",
					title: "font-rendering",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "formatting",
					title: "formatting",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "git",
					title: "git",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "github",
					title: "github",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "gpu",
					title: "gpu",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "grammar",
					title: "grammar",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "grid-view",
					title: "grid-view",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "i18n",
					title: "i18n",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "icon-brand",
					title: "icon-brand",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "icons-product",
					title: "icons-product",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "install-update",
					title: "install-update",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "integrated-terminal-conpty",
					title: "integrated-terminal-conpty",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "integrated-terminal-links",
					title: "integrated-terminal-links",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "integrated-terminal-winpty",
					title: "integrated-terminal-winpty",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "integration-test",
					title: "integration-test",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "intellisense-config",
					title: "intellisense-config",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "ipc",
					title: "ipc",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "keybindings-editor",
					title: "keybindings-editor",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "keybindings",
					title: "keybindings",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "keyboard-layout",
					title: "keyboard-layout",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "label-provider",
					title: "label-provider",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "languages-basic",
					title: "languages-basic",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "languages-diagnostics",
					title: "languages-diagnostics",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "languages-guessing",
					title: "languages-guessing",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "lcd-text-rendering",
					title: "lcd-text-rendering",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "list",
					title: "list",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "log",
					title: "log",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "marketplace",
					title: "marketplace",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "notebook",
					title: "notebook",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "outline",
					title: "outline",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "perf-bloat",
					title: "perf-bloat",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "perf-startup",
					title: "perf-startup",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "portable-mode",
					title: "portable-mode",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "proxy",
					title: "proxy",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "quick-pick",
					title: "quick-pick",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "references-viewlet",
					title: "references-viewlet",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "release-notes",
					title: "release-notes",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "remote",
					title: "remote",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "rename",
					title: "rename",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "sandbox",
					title: "sandbox",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "scm",
					title: "scm",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "screencast-mode",
					title: "screencast-mode",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "search-api",
					title: "search-api",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "search-editor",
					title: "search-editor",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "search-replace",
					title: "search-replace",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "semantic-tokens",
					title: "semantic-tokens",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "settings-editor",
					title: "settings-editor",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "settings-sync-server",
					title: "settings-sync-server",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "shared-process",
					title: "shared-process",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "simple-file-dialog",
					title: "simple-file-dialog",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "smart-select",
					title: "smart-select",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "smoke-test",
					title: "smoke-test",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "snap",
					title: "snap",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "snippets",
					title: "snippets",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "splitview",
					title: "splitview",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "suggest",
					title: "suggest",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "sync-error-handling",
					title: "sync-error-handling",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "telemetry",
					title: "telemetry",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "themes",
					title: "themes",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "timeline-git",
					title: "timeline-git",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "tokenization",
					title: "tokenization",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "trackpad/scroll",
					title: "trackpad/scroll",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "tree",
					title: "tree",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "undo-redo",
					title: "undo-redo",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "unit-test",
					title: "unit-test",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "uri",
					title: "uri",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "ux",
					title: "ux",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "VIM",
					title: "VIM",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "vscode-build",
					title: "vscode-build",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "vscode-website",
					title: "vscode-website",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "webview",
					title: "webview",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-actions",
					title: "workbench-actions",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-cli",
					title: "workbench-cli",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-diagnostics",
					title: "workbench-diagnostics",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-dnd",
					title: "workbench-dnd",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-editor-grid",
					title: "workbench-editor-grid",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-editors",
					title: "workbench-editors",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-electron",
					title: "workbench-electron",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-feedback",
					title: "workbench-feedback",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-history",
					title: "workbench-history",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-hot-exit",
					title: "workbench-hot-exit",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-hover",
					title: "workbench-hover",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-launch",
					title: "workbench-launch",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-link",
					title: "workbench-link",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-multiroot",
					title: "workbench-multiroot",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-notifications",
					title: "workbench-notifications",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-os-integration",
					title: "workbench-os-integration",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-rapid-render",
					title: "workbench-rapid-render",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-run-as-admin",
					title: "workbench-run-as-admin",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-state",
					title: "workbench-state",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-status",
					title: "workbench-status",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-tabs",
					title: "workbench-tabs",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-touchbar",
					title: "workbench-touchbar",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-views",
					title: "workbench-views",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-welcome",
					title: "workbench-welcome",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-window",
					title: "workbench-window",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workbench-zen",
					title: "workbench-zen",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workspace-edit",
					title: "workspace-edit",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "workspace-symbols",
					title: "workspace-symbols",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "zoom",
					title: "zoom",
					color: "rgb(197, 222, 245)",
				},
			],
		},
		assignees,
		milestones,
	],
	"microsoft/vscode-remote-release": [
		verification,
		wontfix,
		general,
		{
			category: "Feature Areas",
			items: [
				{
					type: "label",
					value: "ssh",
					title: "ssh",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "containers",
					title: "containers",
					color: "rgb(197, 222, 245)",
				},
				{
					type: "label",
					value: "wsl",
					title: "wsl",
					color: "rgb(197, 222, 245)",
				},
			],
		},
		assignees,
		milestones,
	],
};
