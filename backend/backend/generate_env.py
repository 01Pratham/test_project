def generate_env(ENV_PATH: str) -> None:
    with open("../frontend/.env", "+w") as env:
        with open(ENV_PATH, "r") as f:
            for line in f:
                splitLine = line.strip().split("=")
                key = splitLine[0].replace("APP_", "")
                value = "=".join(splitLine[1:])
                if "DB_" not in key and key != "":
                    env.write(f"REACT_APP_{key}={value}\n")
