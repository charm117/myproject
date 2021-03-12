
window.onload = function () {
    var graph = new X6.Graph({
        container: document.getElementById('container'),
        width: 800,
        height: 600,
        background: {
            color: '#ecf5f3', // 设置画布背景颜色
        },
        // 格子属性
        grid: {
            size: 10,
            visible: true,
            type: 'dot',
            args: [
                {
                    color: '#cccccc',
                    thickness: 1
                },
                {
                    color: '#5F95FF',
                    thickness: 1,
                    factor: 4
                }
            ]
        },
        selecting: {
            enabled: true,
            multiple: false, // 是否启用点击多选
            rubberband: false, // 是否启用框选，默认为 false
            movable: true
        },
        connecting: {
            anchor: 'center',
            // connectionPoint: 'anchor',
            allowBlank: false,
            highlight: true,
            snap: true,
            allowMulti: 'withPort',
            interacting: {
                vertexDeletable: true
            },
            // 连线
            createEdge() {
                return new X6.Shape.Edge({
                    attrs: {
                        line: {
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            targetMarker: {
                                name: 'classic',
                                size: 10
                            }
                        }
                    },
                    router: {
                        name: 'manhattan'
                    }
                })
            },
            validateConnection({
                sourceMagnet,
                targetMagnet
            }) {
                // if (sourceView === targetView) {
                //   return false
                // }
                if (!sourceMagnet) {
                    return false
                }
                if (!targetMagnet) {
                    return false
                }
                return true
            }
        },
        highlighting: {
            magnetAvailable: {
                name: 'stroke',
                args: {
                    padding: 4,
                    attrs: {
                        strokeWidth: 4,
                        stroke: 'rgba(223,234,255)'
                    }
                }
            }
        },
        snapline: true,
        history: true,
        clipboard: {
            enabled: true
        },
        keyboard: {
            enabled: true
        },
        embedding: {
            enabled: true,
            findParent({ node }) {
                const bbox = node.getBBox()
                return this.getNodes().filter((node) => {
                    // 只有 data.parent 为 true 的节点才是父节点
                    const data = node.getData()
                    if (data && data.parent) {
                        const targetBBox = node.getBBox()
                        return bbox.isIntersectWithRect(targetBBox)
                    }
                    return false
                })
            }
        }
    });
    console.log(graph)
    const FlowChartRect = X6.Graph.registerNode('flow-chart-rect', {
        inherit: 'rect',
        width: 80,
        height: 42,
        attrs: {
            body: {
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: 'rgba(95,149,255,0.05)'
            },
            fo: {
                refWidth: '100%',
                refHeight: '100%'
            },
            foBody: {
                style: {
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }
            },
            'edit-text': {
                contenteditable: 'true',
                class: 'x6-edit-text',
                style: {
                    width: '100%',
                    textAlign: 'center',
                    fontSize: 12,
                    color: 'rgba(0,0,0,0.85)'
                }
            },
            text: {
                fontSize: 12,
                fill: 'rgba(0,0,0,0.85)'
            }
        },
        markup: [
            {
                tagName: 'rect',
                selector: 'body'
            },
            {
                tagName: 'text',
                selector: 'text'
            },
            {
                tagName: 'foreignObject',
                selector: 'fo',
                children: [
                    {
                        tagName: 'body',
                        selector: 'foBody',
                        children: [
                            {
                                tagName: 'div',
                                selector: 'edit-text'
                            }
                        ]
                    }
                ]
            }
        ],
        ports: {
            groups: {
                top: {
                    position: 'top',
                    attrs: {
                        circle: {
                            r: 4,
                            magnet: true,
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            fill: '#fff',
                            style: {
                                visibility: 'hidden'
                            }
                        }
                    }
                },
                right: {
                    position: 'right',
                    attrs: {
                        circle: {
                            r: 4,
                            magnet: true,
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            fill: '#fff',
                            style: {
                                visibility: 'hidden'
                            }
                        }
                    }
                },
                bottom: {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            r: 4,
                            magnet: true,
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            fill: '#fff',
                            style: {
                                visibility: 'hidden'
                            }
                        }
                    }
                },
                left: {
                    position: 'left',
                    attrs: {
                        circle: {
                            r: 4,
                            magnet: true,
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            fill: '#fff',
                            style: {
                                visibility: 'hidden'
                            }
                        }
                    }
                }
            },
            items: [
                {
                    group: 'top'
                },
                {
                    group: 'right'
                },
                {
                    group: 'bottom'
                },
                {
                    group: 'left'
                }
            ]
        }
    })
    const ChartVideoRect = X6.Graph.registerNode('flow-video-rect', {
        inherit: 'rect',
        width: 120,
        height: 40,
        attrs: {
            body: {
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: 'rgba(95,149,255,0.05)'
            },
            image: {
                'xlink:href':
                    'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
                width: 16,
                height: 16,
                x: 6,
                y: 12
            }
        },
        markup: [
            {
                tagName: 'rect',
                selector: 'body'
            },
            {
                tagName: 'image',
                selector: 'image'
            },
            {
                tagName: 'text',
                selector: 'title'
            },
            {
                tagName: 'text',
                selector: 'text'
            }
        ],
        ports: {
            groups: {
                top: {
                    position: 'top',
                    attrs: {
                        circle: {
                            r: 4,
                            magnet: true,
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            fill: '#fff',
                            style: {
                                visibility: 'hidden'
                            }
                        }
                    }
                },
                right: {
                    position: 'right',
                    attrs: {
                        circle: {
                            r: 4,
                            magnet: true,
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            fill: '#fff',
                            style: {
                                visibility: 'hidden'
                            }
                        }
                    }
                },
                bottom: {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            r: 4,
                            magnet: true,
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            fill: '#fff',
                            style: {
                                visibility: 'hidden'
                            }
                        }
                    }
                },
                left: {
                    position: 'left',
                    attrs: {
                        circle: {
                            r: 4,
                            magnet: true,
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            fill: '#fff',
                            style: {
                                visibility: 'hidden'
                            }
                        }
                    }
                }
            },
            items: [
                {
                    group: 'top'
                },
                {
                    group: 'right'
                },
                {
                    group: 'bottom'
                },
                {
                    group: 'left'
                }
            ]
        }
    })
    const ChartH5Rect = X6.Graph.registerNode('flow-H5-rect', {
        inherit: 'rect',
        width: 120,
        height: 40,
        attrs: {
            body: {
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: 'rgb(95,149,255)'
            },
            image: {
                'xlink:href':'./imgs/h5.png',
                width: 16,
                height: 16,
                x: 6,
                y: 12
            }
        },
        markup: [
            {
                tagName: 'rect',
                selector: 'body'
            },
            {
                tagName: 'image',
                selector: 'image'
            },
            {
                tagName: 'text',
                selector: 'title'
            },
            {
                tagName: 'text',
                selector: 'text'
            }
        ],
        ports: {
            groups: {
                top: {
                    position: 'top',
                    attrs: {
                        circle: {
                            r: 4,
                            magnet: true,
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            fill: '#fff',
                            style: {
                                visibility: 'hidden'
                            }
                        }
                    }
                },
                right: {
                    position: 'right',
                    attrs: {
                        circle: {
                            r: 4,
                            magnet: true,
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            fill: '#fff',
                            style: {
                                visibility: 'hidden'
                            }
                        }
                    }
                },
                bottom: {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            r: 4,
                            magnet: true,
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            fill: '#fff',
                            style: {
                                visibility: 'hidden'
                            }
                        }
                    }
                },
                left: {
                    position: 'left',
                    attrs: {
                        circle: {
                            r: 4,
                            magnet: true,
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            fill: '#fff',
                            style: {
                                visibility: 'hidden'
                            }
                        }
                    }
                }
            },
            items: [
                {
                    group: 'top'
                },
                {
                    group: 'right'
                },
                {
                    group: 'bottom'
                },
                {
                    group: 'left'
                }
            ]
        }
    })
    const ChartWebRect = X6.Graph.registerNode('flow-web-rect', {
        inherit: 'rect',
        width: 120,
        height: 40,
        attrs: {
            body: {
                stroke: '#F49B57',
                strokeWidth: 1,
                fill: 'rgba(240,217,217,0.8)'
            },
            image: {
                'xlink:href':'./imgs/web.png',
                width: 16,
                height: 16,
                x: 6,
                y: 12
            }
        },
        markup: [
            {
                tagName: 'rect',
                selector: 'body'
            },
            {
                tagName: 'image',
                selector: 'image'
            },
            {
                tagName: 'text',
                selector: 'title'
            },
            {
                tagName: 'text',
                selector: 'text'
            }
        ],
        ports: {
            groups: {
                top: {
                    position: 'top',
                    attrs: {
                        circle: {
                            r: 4,
                            magnet: true,
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            fill: '#fff',
                            style: {
                                visibility: 'hidden'
                            }
                        }
                    }
                },
                right: {
                    position: 'right',
                    attrs: {
                        circle: {
                            r: 4,
                            magnet: true,
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            fill: '#fff',
                            style: {
                                visibility: 'hidden'
                            }
                        }
                    }
                },
                bottom: {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            r: 4,
                            magnet: true,
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            fill: '#fff',
                            style: {
                                visibility: 'hidden'
                            }
                        }
                    }
                },
                left: {
                    position: 'left',
                    attrs: {
                        circle: {
                            r: 4,
                            magnet: true,
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            fill: '#fff',
                            style: {
                                visibility: 'hidden'
                            }
                        }
                    }
                }
            },
            items: [
                {
                    group: 'top'
                },
                {
                    group: 'right'
                },
                {
                    group: 'bottom'
                },
                {
                    group: 'left'
                }
            ]
        }
    })
    const ChartRuleRect = X6.Graph.registerNode('flow-rule-rect', {
        inherit: 'rect',
        width: 120,
        height: 40,
        attrs: {
            body: {
                stroke: '#68B698',
                strokeWidth: 1,
                fill: 'rgba(161,204,201,0.8)'
            },
            image: {
                'xlink:href':'./imgs/jiaoyan.png',
                width: 16,
                height: 16,
                x: 6,
                y: 12
            }
        },
        markup: [
            {
                tagName: 'rect',
                selector: 'body'
            },
            {
                tagName: 'image',
                selector: 'image'
            },
            {
                tagName: 'text',
                selector: 'title'
            },
            {
                tagName: 'text',
                selector: 'text'
            }
        ],
        ports: {
            groups: {
                top: {
                    position: 'top',
                    attrs: {
                        circle: {
                            r: 4,
                            magnet: true,
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            fill: '#fff',
                            style: {
                                visibility: 'hidden'
                            }
                        }
                    }
                },
                right: {
                    position: 'right',
                    attrs: {
                        circle: {
                            r: 4,
                            magnet: true,
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            fill: '#fff',
                            style: {
                                visibility: 'hidden'
                            }
                        }
                    }
                },
                bottom: {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            r: 4,
                            magnet: true,
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            fill: '#fff',
                            style: {
                                visibility: 'hidden'
                            }
                        }
                    }
                },
                left: {
                    position: 'left',
                    attrs: {
                        circle: {
                            r: 4,
                            magnet: true,
                            stroke: '#5F95FF',
                            strokeWidth: 1,
                            fill: '#fff',
                            style: {
                                visibility: 'hidden'
                            }
                        }
                    }
                }
            },
            items: [
                {
                    group: 'top'
                },
                {
                    group: 'right'
                },
                {
                    group: 'bottom'
                },
                {
                    group: 'left'
                }
            ]
        }
    })
    // graphData节点数据
    graph.fromJSON(graphData)
}
