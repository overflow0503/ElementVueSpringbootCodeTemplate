(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{57:function(e,t,i){"use strict";i.r(t);var n=i(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"�ҵ�filterchinaʵ����"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#�ҵ�filterchinaʵ����","aria-hidden":"true"}},[e._v("#")]),e._v(" �ҵ�FilterChinaʵ����")]),i("p",[e._v("chain.doFilter(request, response);")]),i("p",[e._v("�� Ctrl+T �ҵ�ʵ�����б����ž��� "),i("code",[e._v("org.apache.catalina.core.ApplicationFilterChain")]),e._v(" ���¸��ϵ�һ���Ծ�֪���ˡ�")]),i("h1",{attrs:{id:"��ȡfilters�б�"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#��ȡfilters�б�","aria-hidden":"true"}},[e._v("#")]),e._v(" ��ȡFilters�б�")]),i("p",[e._v("��ǿת��Ȼ��ʹ�÷���( "),i("code",[e._v("getDeclaredField")]),e._v(" + "),i("code",[e._v("setAccessible")]),e._v(")��ȡ˽�б��� filters�� n��")]),i("p",[e._v("ע�⣺filtersĬ����10���ȣ����治һ�����ˣ�n��������������")]),i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v('@SneakyThrows\nprivate void printAllFilters(FilterChain chain) {\n\tApplicationFilterChain filterChain = (ApplicationFilterChain) chain;\n\n\t// ��ȡ˽�б��� filters\n\tApplicationFilterConfig[] filterConfigs = (ApplicationFilterConfig[]) readField(\n\t\t\tfilterChain, "filters");\n\tint filterSize = (int) readField(filterChain, "n");\n\n\tSystem.out.println("\\n\\nprintAllFilters(), size=" + filterSize);\n\n\tfor (int i = 0; i < filterSize; i++) {\n\t\tSystem.out.println("printAllFilters()" + filterConfigs[i].getFilterClass());\n\t}\n\n\tSystem.out.println("\\n\\n");\n}\n\nprivate Object readField(Object obj, String name)\n\t\tthrows NoSuchFieldException, IllegalAccessException {\n\tField field = obj.getClass().getDeclaredField(name);\n\tfield.setAccessible(true);\n\n\treturn field.get(obj);\n}\n')])]),i("p",[e._v("�����ͼ��")]),i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("printAllFilters(), size=7\nprintAllFilters()org.springframework.boot.web.filter.OrderedCharacterEncodingFilter\nprintAllFilters()org.springframework.boot.web.filter.OrderedHiddenHttpMethodFilter\nprintAllFilters()org.springframework.boot.web.filter.OrderedHttpPutFormContentFilter\nprintAllFilters()org.springframework.boot.web.filter.OrderedRequestContextFilter\nprintAllFilters()org.springframework.boot.web.servlet.DelegatingFilterProxyRegistrationBean$1\nprintAllFilters()cn.xiaowenjie.common.filters.UserFilter\nprintAllFilters()org.apache.tomcat.websocket.server.WsFilter\n")])]),i("h1",{attrs:{id:"�����ȡ���ԣ����÷���"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#�����ȡ���ԣ����÷���","aria-hidden":"true"}},[e._v("#")]),e._v(" �����ȡ���ԣ����÷���")]),i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("private Object invokeMethod(Object obj, String methodName)\n\t\tthrows IllegalAccessException, IllegalArgumentException,\n\t\tInvocationTargetException, NoSuchMethodException, SecurityException {\n\tMethod method = obj.getClass().getDeclaredMethod(methodName, null);\n\tmethod.setAccessible(true);\n\n\treturn method.invoke(obj, null);\n}\n\nprivate Object readField(Class<?> cls, Object obj, String name)\n\t\tthrows NoSuchFieldException, IllegalAccessException {\n\tField field = cls.getDeclaredField(name);\n\tfield.setAccessible(true);\n\n\treturn field.get(obj);\n}\n\nprivate Object readField(Object obj, String name)\n\t\tthrows NoSuchFieldException, IllegalAccessException {\n\treturn readField(obj.getClass(), obj, name);\n}\n")])]),i("p",[e._v("����� "),i("code",[e._v("volatile")]),e._v(" ���͵ģ������� "),i("code",[e._v("obj.getClass()")]),e._v("�������� ���͵� "),i("code",[e._v(".class")])]),i("p",[e._v("|That is known as a class literal. The expression results in a Class object for the given type. Calling  getClass() on a Class instance will return the Class instance for Class, not for MyClass.\n|\n|(All this assumes that the field mInstance is declared in MyClass.)")])])}],!1,null,null,null);t.default=r.exports}}]);