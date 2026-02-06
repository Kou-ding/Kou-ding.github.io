from http.server import SimpleHTTPRequestHandler, HTTPServer
import os

PORT = 8000

class MyHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        # Route mapping
        routes = {
            "/": "index.html",
            "/index": "index.html",
            "/about": "about.html",
            "/dotfiles": "dotfiles.html",
            "/aviator-parrot": "games/aviator-parrot/aviator_parrot_remastered.html"
        }

        # Check if this is a specific route
        if self.path in routes:
            self.path = routes[self.path]
            return super().do_GET()

        # Handle game assets - if the requested path matches a game asset filename
        # and the path doesn't already contain the games directory, redirect to the game folder
        if any(self.path.endswith(ext) for ext in ['.js', '.png', '.jpg', '.jpeg', '.gif', '.css', '.wasm', '.pck']):
            # If it's a game asset but not already in the games path, look in the game directory
            if '/games/' not in self.path:
                # Try serving from the game directory first
                game_asset_path = f"/games/aviator-parrot{self.path}"
                if os.path.exists(os.path.join(os.getcwd(), game_asset_path.lstrip('/'))):
                    self.path = game_asset_path
                    return super().do_GET()

        # Everything else
        return super().do_GET()

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    server = HTTPServer(("localhost", PORT), MyHandler)
    print(f"Server running at http://localhost:{PORT}")
    server.serve_forever()