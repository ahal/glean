(function() {var implementors = {};
implementors["glean"] = [{"text":"impl Sync for Configuration","synthetic":true,"types":[]},{"text":"impl Sync for ClientInfoMetrics","synthetic":true,"types":[]},{"text":"impl Sync for HttpUploader","synthetic":true,"types":[]},{"text":"impl Sync for UuidMetric","synthetic":true,"types":[]},{"text":"impl Sync for BooleanMetric","synthetic":true,"types":[]},{"text":"impl Sync for CounterMetric","synthetic":true,"types":[]},{"text":"impl Sync for CustomDistributionMetric","synthetic":true,"types":[]},{"text":"impl Sync for DatetimeMetric","synthetic":true,"types":[]},{"text":"impl&lt;K&gt; Sync for EventMetric&lt;K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for LabeledMetric&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Sealed&gt;::Inner: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for MemoryDistributionMetric","synthetic":true,"types":[]},{"text":"impl Sync for PingType","synthetic":true,"types":[]},{"text":"impl Sync for QuantityMetric","synthetic":true,"types":[]},{"text":"impl Sync for RecordedExperimentData","synthetic":true,"types":[]},{"text":"impl Sync for StringMetric","synthetic":true,"types":[]},{"text":"impl Sync for StringListMetric","synthetic":true,"types":[]},{"text":"impl Sync for TimespanMetric","synthetic":true,"types":[]},{"text":"impl Sync for TimingDistributionMetric","synthetic":true,"types":[]}];
implementors["glean_core"] = [{"text":"impl Sync for CommonMetricData","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for Configuration","synthetic":true,"types":[]},{"text":"impl Sync for Glean","synthetic":true,"types":[]},{"text":"impl Sync for Lifetime","synthetic":true,"types":[]},{"text":"impl Sync for ErrorKind","synthetic":true,"types":[]},{"text":"impl Sync for ErrorType","synthetic":true,"types":[]},{"text":"impl Sync for HistogramType","synthetic":true,"types":[]},{"text":"impl Sync for RecordedEvent","synthetic":true,"types":[]},{"text":"impl Sync for BooleanMetric","synthetic":true,"types":[]},{"text":"impl Sync for CounterMetric","synthetic":true,"types":[]},{"text":"impl Sync for CustomDistributionMetric","synthetic":true,"types":[]},{"text":"impl Sync for DatetimeMetric","synthetic":true,"types":[]},{"text":"impl Sync for EventMetric","synthetic":true,"types":[]},{"text":"impl Sync for JweMetric","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for LabeledMetric&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for MemoryDistributionMetric","synthetic":true,"types":[]},{"text":"impl Sync for PingType","synthetic":true,"types":[]},{"text":"impl Sync for QuantityMetric","synthetic":true,"types":[]},{"text":"impl Sync for StringMetric","synthetic":true,"types":[]},{"text":"impl Sync for StringListMetric","synthetic":true,"types":[]},{"text":"impl Sync for TimespanMetric","synthetic":true,"types":[]},{"text":"impl Sync for TimingDistributionMetric","synthetic":true,"types":[]},{"text":"impl Sync for UuidMetric","synthetic":true,"types":[]},{"text":"impl Sync for DistributionData","synthetic":true,"types":[]},{"text":"impl Sync for MemoryUnit","synthetic":true,"types":[]},{"text":"impl Sync for TimeUnit","synthetic":true,"types":[]},{"text":"impl Sync for Metric","synthetic":true,"types":[]},{"text":"impl Sync for PingMaker","synthetic":true,"types":[]},{"text":"impl Sync for StorageManager","synthetic":true,"types":[]},{"text":"impl Sync for EventRecordingError","synthetic":true,"types":[]},{"text":"impl Sync for NoExtraKeys","synthetic":true,"types":[]},{"text":"impl Sync for PingRequest","synthetic":true,"types":[]},{"text":"impl Sync for PingUploadManager","synthetic":true,"types":[]},{"text":"impl Sync for UploadResult","synthetic":true,"types":[]},{"text":"impl Sync for PingUploadTask","synthetic":true,"types":[]}];
implementors["glean_ffi"] = [{"text":"impl&lt;'a&gt; !Sync for FfiConfiguration&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for ByteBuffer","synthetic":true,"types":[]},{"text":"impl !Sync for FfiPingUploadTask","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()