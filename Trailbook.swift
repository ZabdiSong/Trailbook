import AppKit
import SwiftUI
import WebKit

@main
struct TrailbookApp: App {
    var body: some Scene {
        Window("Trailbook", id: "planner") {
            PlannerView()
                .frame(minWidth: 780, minHeight: 560)
        }
        .defaultSize(width: 1190, height: 790)
        .commands { CommandGroup(replacing: .newItem) {} }
    }
}

struct PlannerView: NSViewRepresentable {
    func makeCoordinator() -> Coordinator { Coordinator() }

    func makeNSView(context: Context) -> WKWebView {
        let view = WKWebView()
        view.uiDelegate = context.coordinator
        view.navigationDelegate = context.coordinator
        // Keep the previous planner's web-storage origin. All startup assets are
        // embedded in this document, so loading it never contacts a local server.
        let origin = URL(string: "http://127.0.0.1:51747/")!
        if let url = Bundle.main.url(forResource: "Planner", withExtension: "html"),
           let html = try? String(contentsOf: url, encoding: .utf8) {
            view.loadHTMLString(html, baseURL: origin)
        } else {
            view.loadHTMLString("<h1>Trailbook could not read its bundled planner.</h1>", baseURL: nil)
        }
        return view
    }

    func updateNSView(_ view: WKWebView, context: Context) {}

    final class Coordinator: NSObject, WKUIDelegate, WKNavigationDelegate {
        func webView(_ webView: WKWebView, runOpenPanelWith parameters: WKOpenPanelParameters,
                     initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping ([URL]?) -> Void) {
            let panel = NSOpenPanel()
            panel.allowsMultipleSelection = false
            panel.canChooseDirectories = false
            guard let window = webView.window else { completionHandler(nil); return }
            panel.beginSheetModal(for: window) { result in
                completionHandler(result == .OK ? panel.urls : nil)
            }
        }

        func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction,
                     decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
            if navigationAction.navigationType == .linkActivated,
               let url = navigationAction.request.url, url.scheme == "https" {
                NSWorkspace.shared.open(url)
                decisionHandler(.cancel)
            } else {
                decisionHandler(.allow)
            }
        }
    }
}
