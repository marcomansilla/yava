# coding=utf-8

def api():
    from apimaker import APIMaker
    api = APIMaker(db)
    return api.process()
