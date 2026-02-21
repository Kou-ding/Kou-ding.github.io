from http.server import SimpleHTTPRequestHandler, HTTPServer
import os

PORT = 8042

class MyHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        # Route mapping
        routes = {
            "/": "index.html",
            "/index": "index.html",
            "/notes": "notes.html",
            "/about": "about.html",
            "/dotfiles": "dotfiles.html"
        }

        # Check if this is a specific route
        if self.path in routes:
            self.path = routes[self.path]
            return super().do_GET()

        # Everything else
        return super().do_GET()

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    server = HTTPServer(("localhost", PORT), MyHandler)
    print(f"Server running at http://localhost:{PORT}")
    server.serve_forever()